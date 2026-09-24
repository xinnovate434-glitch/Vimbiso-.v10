import { useEffect, useState } from 'react';

type Review = {
  id: number;
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type ReviewsListPageProps = {
  onBack: () => void;
};

function ReviewsListPage({ onBack }: ReviewsListPageProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch('http://localhost:4000/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <main className="review-shell">
      <section className="review-card">
        <p className="eyebrow">CUSTOMER REVIEWS</p>
        <h1>All saved reviews</h1>

        <button type="button" className="primary-btn wide" onClick={onBack}>
          BACK TO REVIEW FORM
        </button>

        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <div className="review-list">
            {reviews.map((review) => (
              <article key={review.id} className="review-item">
                <strong>Order: {review.orderId}</strong>
                <p>Rating: {'★'.repeat(review.rating)}</p>
                <p>{review.comment}</p>
                <small>{new Date(review.createdAt).toLocaleString()}</small>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ReviewsListPage;
