import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-top">
      <Link to="/">ACCUEIL</Link>
      <Link to="/produits">PRODUITS</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  );
}

export default Navbar;
