import type { Offer } from './RequestFlow';

type OrderConfirmationProps = {
  offer: Offer;
  onBack: () => void;
  onPay: () => void;
};

const OrderConfirmation = ({
  offer,
  onBack,
  onPay
}: OrderConfirmationProps) => {
  return (
    <main className="order-shell">
      <section className="order-card">
        <p className="eyebrow">ORDER CONFIRMATION</p>

        <h1>{offer.supplierName}</h1>

        <div className="order-summary">
          <div>
            <span>Item</span>
            <strong>20kg tomatoes</strong>
          </div>

          <div>
            <span>Price</span>
            <strong>{offer.price}</strong>
          </div>

          <div>
            <span>Supplier trust</span>
            <strong>{offer.trustScore}/100</strong>
          </div>

          <div>
            <span>Distance</span>
            <strong>{offer.distance}</strong>
          </div>

          <div>
            <span>Availability</span>
            <strong>{offer.availability}</strong>
          </div>

          <div>
            <span>Delivery time</span>
            <strong>{offer.deliveryTime}</strong>
          </div>

          <div>
            <span>Drop-off location</span>
            <strong>Chitungwiza</strong>
          </div>
        </div>

        <button type="button" className="primary-btn wide" onClick={onPay}>
          PAY NOW
        </button>

        <button
          type="button"
          className="secondary-btn wide"
          onClick={onBack}
        >
          BACK TO OFFERS
        </button>
      </section>
    </main>
  );
};

export default OrderConfirmation;
