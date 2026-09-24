const RequestCreate = () => {
  return (
    <main className="request-shell">
      <section className="request-card">
        <p className="eyebrow">WHAT DO YOU NEED?</p>
        <h1>Tell Vimbiso what you need.</h1>

        <label className="field">
          <span>Request</span>
          <input type="text" defaultValue="I need 20kg tomatoes today." />
        </label>

        <label className="field">
          <span>Category</span>
          <select defaultValue="Food">
            <option>Food</option>
            <option>Horticulture</option>
            <option>Services</option>
            <option>Delivery</option>
          </select>
        </label>

        <label className="field">
          <span>Location</span>
          <input type="text" defaultValue="Chitungwiza" />
        </label>

        <label className="field">
          <span>Budget</span>
          <input type="text" defaultValue="$20" />
        </label>

        <button type="button" className="primary-btn wide">
          FIND SUPPLIERS
        </button>
      </section>
    </main>
  );
};

export default RequestCreate;
