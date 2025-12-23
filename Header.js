import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{color:'white', textDecoration:'none'}}>
        <h2>Amazon Clone</h2>
      </Link>
      <Link to="/checkout" style={{marginLeft:'auto', color:'white'}}>
        Cart
      </Link>
    </div>
  );
}
export default Header;
