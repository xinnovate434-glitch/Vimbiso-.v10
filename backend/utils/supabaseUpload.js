const path = require('path');

const BUCKET = 'vimbiso-photos';

// Uploads one multer memory-file to Supabase Storage and returns its public URL.
async function uploadOne(file) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase storage is not configured (missing SUPABASE_URL/SUPABASE_ANON_KEY)');

  const filename = `${Date.now()}-${Math.round(Math.random()*1e9)}${path.extname(file.originalname)}`;
  const res = await fetch(`${url}/storage/v1/object/${BUCKET}/${filename}`, {
    method: 'POST',
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': file.mimetype,
    },
    body: file.buffer,
  });
  if (!res.ok) {
    const errText = await res.text().catch(()=>'');
    throw new Error(`Supabase upload failed: ${res.status} ${errText}`);
  }
  return `${url}/storage/v1/object/public/${BUCKET}/${filename}`;
}

// Uploads an array of multer memory-files in parallel, returns array of public URLs.
exports.uploadImages = async (files=[]) => {
  return Promise.all(files.map(uploadOne));
};
