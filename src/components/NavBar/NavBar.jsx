import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="top-left">
        <p>@itsvidushi</p>
        <i
          className={`hamburger fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </div>
      <div className={`top-centre ${menuOpen ? 'show-menu' : ''}`}>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/all-posts" className="link">
              READ
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
        </ul>
      </div>

      <div className="top-right">
        <i className="top-icon fa-brands fa-github"></i>
        <i className="top-icon fa-brands fa-linkedin-in"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
        <i className="top-icon fa-regular fa-envelope"></i>
      </div>
    </div>
  );
}
