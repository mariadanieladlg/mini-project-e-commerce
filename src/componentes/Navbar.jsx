import {Link} from 'react-router-dom'


import navLogo from "/public/navLogo.png";

const Navbar = () => {
  return (
<header className="navbar">
  <div className="navbar-left">
    <img src={navLogo} alt="Logo" className="logoNav" />
    <h1 className="navbar-title">E-commerce Admin</h1>
  </div>

  <div className="navbar-right">
    <input type="text" placeholder="Search..." className="search-input" />
    <ul className="navbar-links">
      <li><Link className="link" to="/profile">Profile</Link></li>
      <li><Link className="link" to="/about">About</Link></li>
    </ul>
  </div>
</header>

  );
};

export default Navbar;
