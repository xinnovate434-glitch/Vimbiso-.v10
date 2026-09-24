const RequestSummary = () => {
  return (
    <main className="summary-shell">
      <section className="summary-card">
        <p className="eyebrow">REQUEST SUMMARY</p>
        <h1>20kg Tomatoes</h1>

        <div className="summary-list">
          <div><span>Needed</span><strong>Today</strong></div>
          <div><span>Location</span><strong>Chitungwiza</strong></div>
          <div><span>Delivery</span><strong>Required</strong></div>
          <div><span>Budget</span><strong>$20</strong></div>
        </div>

        <button type="button" className="primary-btn wide">
          FIND SUPPLIERS
        </button>
      </section>
    </main>
  );
};

export default RequestSummary;
