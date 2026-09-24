import { useEffect, useState } from 'react';

type Review = {
  id: number;
  orderId: string;
  rating: number;
  comment: string;
  createdAt: string;
};

type Filter = 'all' | 'five' | 'fourplus' | 'positive' | 'neutral' | 'negative';
type SortOption = 'latest' | 'highest' | 'lowest' | 'oldest';

function ReviewsDashboardPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('latest');
  const [refreshTick, setRefreshTick] = useState(0);

  async function loadReviews() {
    try {
      const params = new URLSearchParams();

      if (filter === 'five') {
        params.set('rating', '5');
      } else if (filter === 'fourplus') {
        params.set('minRating', '4');
      } else if (filter === 'positive') {
        params.set('sentiment', 'positive');
      } else if (filter === 'neutral') {
        params.set('sentiment', 'neutral');
      } else if (filter === 'negative') {
        params.set('sentiment', 'negative');
      }

      if (search.trim() !== '') {
        params.set('orderId', search.trim());
      }

      params.set('sort', sort);

      const response = await fetch(`http://localhost:4000/api/reviews?${params.toString()}`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to load reviews:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, [filter, search, sort, refreshTick]);

  const totalReviews = reviews.length;
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : '0.0';

  const latestReview = reviews.length > 0 ? reviews[0] : null;

  const positiveCount = reviews.filter((review) => review.rating >= 4).length;
  const sentiment =
    totalReviews === 0 ? 'No sentiment data' : positiveCount >= totalReviews / 2 ? 'Positive' : 'Mixed';

  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((review) => review.rating === star).length;
    return {
      star,
      count,
      percent: totalReviews === 0 ? 0 : (count / totalReviews) * 100
    };
  });

  const handleExport = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/reviews/export');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'reviews.csv';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to export reviews:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/api/reviews/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      setRefreshTick((value) => value + 1);
    } catch (error) {
      console.error('Failed to delete review:', error);
    }
  };

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <main className="review-shell">
      <section className="review-card">
        <p className="eyebrow">REVIEWS DASHBOARD</p>
        <h1>Customer review summary</h1>

        <div className="toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by order ID"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            className="sort-select"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
          >
            <option value="latest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="highest">Highest rating</option>
            <option value="lowest">Lowest rating</option>
          </select>

          <button type="button" className="small-btn" onClick={() => setRefreshTick((value) => value + 1)}>
            Refresh
          </button>

          <button type="button" className="small-btn primary-small" onClick={handleExport}>
            Export CSV
          </button>
        </div>

        <div className="filter-row">
          <button
            type="button"
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All
          </button>

          <button
            type="button"
            className={filter === 'five' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('five')}
          >
            5★ only
          </button>

          <button
            type="button"
            className={filter === 'fourplus' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('fourplus')}
          >
            4★+
          </button>

          <button
            type="button"
            className={filter === 'positive' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('positive')}
          >
            Positive
          </button>

          <button
            type="button"
            className={filter === 'neutral' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('neutral')}
          >
            Neutral
          </button>

          <button
            type="button"
            className={filter === 'negative' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('negative')}
          >
            Negative
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-box">
            <span>Total reviews</span>
            <strong>{totalReviews}</strong>
          </div>

          <div className="stat-box">
            <span>Average rating</span>
            <strong>{averageRating} / 5</strong>
          </div>

          <div className="stat-box">
            <span>Sentiment</span>
            <strong>{sentiment}</strong>
          </div>
        </div>

        <div className="chart-panel">
          <h2>Rating distribution</h2>

          <div className="distribution-chart">
            {distribution.map((item) => (
              <div key={item.star} className="distribution-row">
                <span>{item.star}★</span>
                <div className="distribution-bar-wrap">
                  <div
                    className="distribution-bar"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <strong>{item.count}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="spotlight">
          <h2>Most recent review</h2>

          {latestReview ? (
            <div className="review-item">
              <strong>Order: {latestReview.orderId}</strong>
              <p>Rating: {'★'.repeat(latestReview.rating)}</p>
              <p>{latestReview.comment}</p>
              <small>{new Date(latestReview.createdAt).toLocaleString()}</small>
            </div>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        <h2>Recent reviews</h2>

        {reviews.length === 0 ? (
          <p>No reviews match this filter.</p>
        ) : (
          <table className="reviews-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td>{review.orderId}</td>
                  <td>{'★'.repeat(review.rating)}</td>
                  <td>{review.comment}</td>
                  <td>{new Date(review.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      type="button"
                      className="danger-btn"
                      onClick={() => handleDelete(review.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}

export default ReviewsDashboardPage;
