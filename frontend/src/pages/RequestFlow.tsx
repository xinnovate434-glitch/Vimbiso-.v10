import { useEffect, useState } from 'react';

export type Offer = {
  id: string;
  supplierName: string;
  trustScore: number;
  price: string;
  distance: string;
  availability: string;
  deliveryTime: string;
};

type RequestFlowProps = {
  onChoose: (offer: Offer) => void;
};

const RequestFlow = ({ onChoose }: RequestFlowProps) => {
  const [request, setRequest] = useState('I need 20kg tomatoes today.');
  const [category, setCategory] = useState('Food');
  const [location, setLocation] = useState('Chitungwiza');
  const [budget, setBudget] = useState('$20');
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOffers = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/offers?requestId=req_1001');
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setOffers(data);
      } else {
        setOffers([
          {
            id: 'fallback_1',
            supplierName: 'Tendai Fresh Produce',
            trustScore: 96,
            price: '$18.00',
            distance: '2.1 km',
            availability: 'Available today',
            deliveryTime: '30 mins'
          }
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch offers:', error);
      setOffers([
        {
          id: 'fallback_1',
          supplierName: 'Tendai Fresh Produce',
          trustScore: 96,
          price: '$18.00',
          distance: '2.1 km',
          availability: 'Available today',
          deliveryTime: '30 mins'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const handleSubmit = async () => {
    const payload = {
      title: request,
      category,
      location,
      budget,
      requiredBy: 'today'
    };

    try {
      const response = await fetch('http://localhost:4000/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      console.log('Request created:', data);
      fetchOffers();
    } catch (error) {
      console.error('Failed to create request:', error);
    }
  };

  return (
    <main className="request-flow-shell">
      <section className="request-flow-card">
        <p className="eyebrow">WHAT DO YOU NEED?</p>
        <h1>Tell Vimbiso what you need.</h1>

        <label className="field">
          <span>Request</span>
          <input
            type="text"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
        </label>

        <label className="field">
          <span>Category</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Food</option>
            <option>Horticulture</option>
            <option>Services</option>
            <option>Delivery</option>
          </select>
        </label>

        <label className="field">
          <span>Location</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label className="field">
          <span>Budget</span>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </label>

        <button type="button" className="primary-btn wide" onClick={handleSubmit}>
          {loading ? 'SEARCHING...' : 'FIND SUPPLIERS'}
        </button>

        <div className="offers-panel">
          <h2>Supplier responses</h2>

          {offers.length === 0 ? (
            <p className="empty-state">No offers yet.</p>
          ) : (
            offers.map((offer) => (
              <article key={offer.id} className="offer-item">
                <div className="offer-head">
                  <div className="offer-title-box">
                    <strong>{offer.supplierName}</strong>
                    <span className="verified-badge">Verified</span>
                  </div>
                  <span className="trust-pill">Trust {offer.trustScore}</span>
                </div>

                <div className="offer-meta">
                  <span>{offer.distance}</span>
                  <span>{offer.availability}</span>
                </div>

                <div className="offer-footer">
                  <div className="offer-price-block">
                    <strong>{offer.price}</strong>
                    <p>delivery: {offer.deliveryTime}</p>
                  </div>

                  <button
                    type="button"
                    className="choose-btn"
                    onClick={() => onChoose(offer)}
                  >
                    Choose
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default RequestFlow;
