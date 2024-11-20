import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogoClick = e => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <Link to='/' onClick={handleLogoClick}>
          <img
            className='navbar__main-logo'
            src='/images/main-logo.svg'
            alt='Main Logo'
          />
        </Link>
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='navbar__link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/about'>About</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/destination'>Destination</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/faq'>Faq</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/pricing'>Pricing</Link>
          </li>
        </ul>
        <button className='light-blue-button'>Book Trip</button>

        <button className='navbar__toggle' onClick={toggleMenu}>
          <span className='navbar__toggle-icon'></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
