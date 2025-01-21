import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/interests">Interests</Link></li>
        <li><Link to="/whats-new">What's New?</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;