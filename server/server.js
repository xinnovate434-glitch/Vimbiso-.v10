const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const reviewsFile = path.join(__dirname, 'data', 'reviews.json');

app.use(express.json());

function readReviews() {
  try {
    if (!fs.existsSync(reviewsFile)) {
      fs.mkdirSync(path.dirname(reviewsFile), { recursive: true });
      fs.writeFileSync(reviewsFile, '[]');
    }

    const data = fs.readFileSync(reviewsFile, 'utf8');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/reviews/export', (req, res) => {
  const reviews = readReviews();

  const headers = ['id', 'orderId', 'rating', 'comment', 'createdAt'];
  const rows = reviews.map((review) => [
    review.id,
    review.orderId,
    review.rating,
    `"${String(review.comment || '').replace(/"/g, '""')}"`,
    review.createdAt
  ]);

  const csv = [
    headers.join(','),
    ...rows.map((row) => row.join(','))
  ].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="reviews.csv"');
  res.send(csv);
});

app.get('/api/reviews', (req, res) => {
  const { minRating, rating, sentiment, orderId, sort } = req.query;
  let reviews = readReviews();

  if (orderId !== undefined && String(orderId).trim() !== '') {
    const q = String(orderId).toLowerCase();
    reviews = reviews.filter((review) =>
      String(review.orderId).toLowerCase().includes(q)
    );
  }

  if (rating !== undefined) {
    const ratingValue = Number(rating);
    reviews = reviews.filter((review) => Number(review.rating) === ratingValue);
  }

  if (minRating !== undefined) {
    const min = Number(minRating);
    reviews = reviews.filter((review) => Number(review.rating) >= min);
  }

  if (sentiment !== undefined) {
    const value = String(sentiment).toLowerCase();

    if (value === 'positive') {
      reviews = reviews.filter((review) => Number(review.rating) >= 4);
    }

    if (value === 'neutral') {
      reviews = reviews.filter((review) => Number(review.rating) === 3);
    }

    if (value === 'negative') {
      reviews = reviews.filter((review) => Number(review.rating) <= 2);
    }
  }

  if (sort === 'highest') {
    reviews = [...reviews].sort((a, b) => Number(b.rating) - Number(a.rating));
  } else if (sort === 'lowest') {
    reviews = [...reviews].sort((a, b) => Number(a.rating) - Number(b.rating));
  } else if (sort === 'oldest') {
    reviews = [...reviews].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else {
    reviews = [...reviews].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  res.json(reviews);
});

app.post('/api/reviews', (req, res) => {
  const reviews = readReviews();
  const review = {
    id: Date.now(),
    orderId: req.body.orderId || 'order_demo_001',
    rating: req.body.rating || 5,
    comment: req.body.comment || '',
    createdAt: new Date().toISOString()
  };

  reviews.push(review);
  fs.writeFileSync(reviewsFile, JSON.stringify(reviews, null, 2));

  res.status(201).json({
    success: true,
    review
  });
});

app.delete('/api/reviews/:id', (req, res) => {
  const reviews = readReviews();
  const id = Number(req.params.id);

  const filtered = reviews.filter((review) => Number(review.id) !== id);

  if (filtered.length === reviews.length) {
    return res.status(404).json({ success: false, message: 'Review not found' });
  }

  fs.writeFileSync(reviewsFile, JSON.stringify(filtered, null, 2));
  res.json({ success: true, deletedId: id });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
