const IdentityOnboarding = () => {
  return (
    <div className="onboarding-shell">
      <div className="onboarding-card">
        <p className="eyebrow">CREATE YOUR VIMBISO IDENTITY</p>
        <h1>Build trust from day one.</h1>

        <div className="field-group">
          <label>
            Full name
            <input type="text" defaultValue="Tendai Moyo" />
          </label>

          <label>
            Business / Service name
            <input type="text" defaultValue="Tendai Fresh Produce" />
          </label>

          <label>
            Category
            <select defaultValue="Food">
              <option>Food</option>
              <option>Horticulture</option>
              <option>Services</option>
              <option>Delivery</option>
              <option>Creator</option>
            </select>
          </label>

          <label>
            Location
            <input type="text" defaultValue="Chitungwiza" />
          </label>
        </div>

        <button className="primary-btn wide">CREATE IDENTITY</button>
      </div>
    </div>
  );
};

export default IdentityOnboarding;
