//syntax arrow function
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img src="/navLogo.png" alt="Logo do site" className="logoNav" />
        <h2>Ecommerce-admin</h2>
        <button className="searchBtn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
