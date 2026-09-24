const offers = [
  {
    name: 'Tendai Fresh Produce',
    trust: 96,
    distance: '2.1 km',
    price: '$18.00',
    availability: 'Available today',
    delivery: '30 mins'
  },
  {
    name: 'Mbare Fruits Hub',
    trust: 89,
    distance: '3.4 km',
    price: '$20.00',
    availability: 'Available today',
    delivery: '45 mins'
  },
  {
    name: 'Sustainable Harvest',
    trust: 94,
    distance: '4.1 km',
    price: '$19.50',
    availability: '16 boxes left',
    delivery: '50 mins'
  }
];

const OfferList = () => {
  return (
    <main className="offer-shell">
      <section className="offer-card">
        <p className="eyebrow">OFFERS</p>
        <h1>Supplier responses</h1>

        {offers.map((offer) => (
          <article key={offer.name} className="offer-item">
            <div className="offer-head">
              <div className="offer-title-box">
                <strong>{offer.name}</strong>
                <span className="verified-badge">Verified</span>
              </div>
              <span className="trust-pill">Trust {offer.trust}</span>
            </div>

            <div className="offer-meta">
              <span>{offer.distance}</span>
              <span>{offer.availability}</span>
            </div>

            <div className="offer-footer">
              <div className="offer-price-block">
                <strong>{offer.price}</strong>
                <p>delivery: {offer.delivery}</p>
              </div>

              <button type="button" className="choose-btn">
                Choose
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default OfferList;
