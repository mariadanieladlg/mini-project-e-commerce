import { Link } from "react-router-dom";
import navLogo from "/public/navLogo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={navLogo} alt="Logo" className="logoNav" />
        <h1 className="navbar-title">My E-Commerce</h1>
      </div>

      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/create" className="create-btn">
              + Add Product
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
