type OrderSuccessProps = {
  onReview: () => void;
  onStartAgain: () => void;
};

function OrderSuccess(props: OrderSuccessProps) {
  return (
    <main className="success-shell">
      <section className="success-card">
        <div className="success-icon">OK</div>
        <p className="eyebrow">ORDER CONFIRMED</p>
        <h1>Your Vimbiso order is on the way.</h1>

        <div className="success-box">
          <div>
            <span>Order</span>
            <strong>20kg tomatoes</strong>
          </div>

          <div>
            <span>Supplier</span>
            <strong>Tendai Fresh Produce</strong>
          </div>

          <div>
            <span>Delivery agent</span>
            <strong>Farai Driver</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>Confirmed</strong>
          </div>
        </div>

        <button
          type="button"
          className="primary-btn wide"
          onClick={props.onReview}
        >
          LEAVE REVIEW
        </button>

        <button
          type="button"
          className="secondary-btn wide"
          onClick={props.onStartAgain}
        >
          START NEW REQUEST
        </button>
      </section>
    </main>
  );
}

export default OrderSuccess;
