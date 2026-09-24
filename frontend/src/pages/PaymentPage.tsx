import type { Offer } from './RequestFlow';

type PaymentPageProps = {
  offer: Offer;
  onBack: () => void;
  onPaid: () => void;
};

const PaymentPage = ({
  offer,
  onBack,
  onPaid
}: PaymentPageProps) => {
  return (
    <main className="payment-shell">
      <section className="payment-card">
        <p className="eyebrow">DEMO PAYMENT</p>
        <h1>Complete payment</h1>

        <div className="payment-box">
          <div>
            <span>Supplier</span>
            <strong>{offer.supplierName}</strong>
          </div>

          <div>
            <span>Order</span>
            <strong>20kg tomatoes</strong>
          </div>

          <div>
            <span>Amount</span>
            <strong>{offer.price}</strong>
          </div>

          <div>
            <span>Method</span>
            <strong>Mobile Money</strong>
          </div>
        </div>

        <button
          type="button"
          className="primary-btn wide"
          onClick={onPaid}
        >
          PAY WITH DEMO
        </button>

        <button
          type="button"
          className="secondary-btn wide"
          onClick={onBack}
        >
          BACK
        </button>

        <p className="mini-note">
          This is a demo payment for MVP testing.
        </p>
      </section>
    </main>
  );
};

export default PaymentPage;
