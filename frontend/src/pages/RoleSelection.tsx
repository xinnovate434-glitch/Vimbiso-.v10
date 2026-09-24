const roles = [
  { name: 'Buyer', description: 'I need goods or services' },
  { name: 'Seller', description: 'I sell products or services' },
  { name: 'Service Provider', description: 'I offer skilled work' },
  { name: 'Delivery Agent', description: 'I move goods and orders' },
  { name: 'Creator', description: 'I refer and grow demand' },
  { name: 'Administrator', description: 'I manage the ecosystem' }
];

const RoleSelection = () => {
  return (
    <main className="role-shell">
      <section className="role-card">
        <p className="eyebrow">CHOOSE YOUR ROLE</p>
        <h1>How do you want to participate in Vimbiso?</h1>

        <div className="role-list">
          {roles.map((role) => (
            <button type="button" className="role-item" key={role.name}>
              <div>
                <strong>{role.name}</strong>
                <small>{role.description}</small>
              </div>
              <span>→</span>
            </button>
          ))}
        </div>

        <button type="button" className="primary-btn wide">
          CONTINUE
        </button>
      </section>
    </main>
  );
};

export default RoleSelection;
