import navLogo from "/public/navLogo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <img src={navLogo} alt="Logo" className="logoNav" />
      <div className="navbar-center">
        <h1 className="navbar-title">E-commerce Admin</h1>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
    </header>
  );
};

export default Navbar;
