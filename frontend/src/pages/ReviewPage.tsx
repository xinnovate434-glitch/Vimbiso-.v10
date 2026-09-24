import { useState } from 'react';

type ReviewPageProps = {
  onComplete: () => void;
};

function ReviewPage({ onComplete }: ReviewPageProps) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  function handleSubmit() {
    console.log({
      orderId: 'order_demo_001',
      rating,
      comment
    });

    onComplete();
  }

  return (
    <main className="review-shell">
      <section className="review-card">
        <p className="eyebrow">LEAVE A REVIEW</p>

        <h1>How was your Vimbiso experience?</h1>

        <p className="review-subtitle">
          Review Tendai Fresh Produce and help build a trusted marketplace.
        </p>

        <div className="rating-section">
          <span className="rating-label">Your rating</span>

          <div className="rating-buttons">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={value <= rating ? 'star active' : 'star'}
                onClick={() => setRating(value)}
              >
                {value <= rating ? '★' : '☆'}
              </button>
            ))}
          </div>

          <strong>{rating} out of 5</strong>
        </div>

        <label className="review-field">
          <span>Comment</span>

          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            rows={5}
            placeholder="Tell us about your experience"
          />
        </label>

        <button
          type="button"
          className="primary-btn wide"
          onClick={handleSubmit}
        >
          SUBMIT REVIEW
        </button>
      </section>
    </main>
  );
}

export default ReviewPage;
