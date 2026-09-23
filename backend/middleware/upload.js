const multer = require('multer');
const path   = require('path');
// Uploads are held in memory, then pushed to Supabase Storage (see utils/supabaseUpload.js)
// so files survive server restarts/redeploys instead of vanishing from local disk.
const storage = multer.memoryStorage();
const filter = (_,file,cb) => {
  /jpeg|jpg|png|webp/.test(path.extname(file.originalname).toLowerCase()) ? cb(null,true) : cb(new Error('Images only'));
};
exports.upload = multer({ storage, limits:{ fileSize:5*1024*1024 }, fileFilter:filter });
