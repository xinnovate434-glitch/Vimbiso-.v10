import { useState } from 'react';
import { supabase } from '../lib/supabase';

function ReviewFormPage() {
  const [orderId, setOrderId] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');

    const { error } = await supabase.from('reviews').insert({
      order_id: orderId.trim(),
      rating,
      comment: comment.trim(),
    });

    if (error) {
      console.error(error);
      setMessage('Failed to save review.');
      return;
    }

    setOrderId('');
    setRating(5);
    setComment('');
    setMessage('Review submitted successfully.');
  }

  return (
    <main className="review-shell">
      <section className="review-card">
        <p className="eyebrow">NEW REVIEW</p>
        <h1>Submit customer feedback</h1>

        <form className="review-form" onSubmit={handleSubmit}>
          <label>
            Order ID
            <input
              type="text"
              value={orderId}
              onChange={(event) => setOrderId(event.target.value)}
              placeholder="ORD-1042"
              required
            />
          </label>

          <label>
            Rating
            <select
              value={rating}
              onChange={(event) => setRating(Number(event.target.value))}
            >
              <option value={5}>5 - Excellent</option>
              <option value={4}>4 - Good</option>
              <option value={3}>3 - Average</option>
              <option value={2}>2 - Poor</option>
              <option value={1}>1 - Very poor</option>
            </select>
          </label>

          <label>
            Comment
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              rows={5}
              placeholder="Tell us about the experience..."
              required
            />
          </label>

          <button type="submit" className="primary-btn">
            Save review
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </section>
    </main>
  );
}

export default ReviewFormPage;
