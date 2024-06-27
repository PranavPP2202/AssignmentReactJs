import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">W&W</div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/info">Info</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
