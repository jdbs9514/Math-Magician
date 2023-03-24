import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="menubar">
      <h1>Math Magicians</h1>
      <div className="links">
        <span><Link to="/"> Home |</Link></span>
        <span><Link to="/calculator"> Calculator |</Link></span>
        <span> <Link to="/quote">Quote </Link></span>
      </div>
    </nav>
  );
}

export default Navbar;