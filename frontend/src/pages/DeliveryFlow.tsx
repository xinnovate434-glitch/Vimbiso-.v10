type DeliveryFlowProps = {
  onBack: () => void;
  onComplete: () => void;
};

const DeliveryFlow = ({
  onBack,
  onComplete
}: DeliveryFlowProps) => {
  return (
    <main className="delivery-shell">
      <section className="delivery-card">
        <p className="eyebrow">DELIVERY ASSIGNMENT</p>
        <h1>Find a delivery agent</h1>

        <div className="delivery-status">
          <span className="status-dot" />
          <strong>Delivery agent available</strong>
        </div>

        <div className="delivery-box">
          <div>
            <span>Pickup</span>
            <strong>Mbare Market</strong>
          </div>

          <div>
            <span>Drop-off</span>
            <strong>Chitungwiza</strong>
          </div>

          <div>
            <span>Agent</span>
            <strong>Farai Driver</strong>
          </div>

          <div>
            <span>Estimated time</span>
            <strong>45 minutes</strong>
          </div>

          <div>
            <span>Delivery fee</span>
            <strong>$8.00</strong>
          </div>
        </div>

        <button
          type="button"
          className="primary-btn wide"
          onClick={onComplete}
        >
          CONFIRM DELIVERY
        </button>

        <button
          type="button"
          className="secondary-btn wide"
          onClick={onBack}
        >
          BACK TO PAYMENT
        </button>
      </section>
    </main>
  );
};

export default DeliveryFlow;
