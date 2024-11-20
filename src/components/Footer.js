import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <section className='footer big-container '>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__info'>
            <Link to='/' onClick={handleLogoClick}>
              <img
                src='/images/main-logo-light.svg'
                alt='Main Logo'
                className='footer__main-logo'
              />
            </Link>
            <p>
              Hello, we are Lift Media. Our goal is to translate the positive
              effects from revolutionizing
            </p>
            <div className='footer__socials'>
              <svg className='footer__socials-icon'>
                <use xlinkHref='/images/icons.svg#icon-facebook'></use>
              </svg>
              <svg className='footer__socials-icon'>
                <use xlinkHref='/images/icons.svg#icon-pinterest'></use>
              </svg>
              <svg className='footer__socials-icon'>
                <use xlinkHref='/images/icons.svg#icon-instagram'></use>
              </svg>
              <svg className='footer__socials-icon'>
                <use xlinkHref='/images/icons.svg#icon-twitter'></use>
              </svg>
            </div>
          </div>
          <div className='footer__about'>
            <h2 className='footer__title'>About</h2>
            <ul className='footer__about-menu'>
              <li className='footer__link'>
                <Link to='/about'>About us</Link>
              </li>
              <li className='footer__link'>Our Services</li>
              <li className='footer__link'>Privacy Policy</li>
              <li className='footer__link'>Terms & Conditions</li>
            </ul>
          </div>
          <div className='footer__contact'>
            <h2 className='footer__title'>Contact</h2>
            <div className='footer__contact-info'>
              <div className='footer__link'>
                <svg className='footer__icon'>
                  <use xlinkHref='/images/icons.svg#icon-phone'></use>
                </svg>
                <a href='tel:+01234567890'>
                  <p className='footer__contact'>+012 123 456 789</p>
                </a>
              </div>
              <div className='footer__link'>
                <svg className='footer__icon'>
                  <use xlinkHref='/images/icons.svg#icon-mail'></use>
                </svg>
                <a href='mailto:info@example.com' className='footer__contact'>
                  info@example.com
                </a>
              </div>
              <div className='footer__link'>
                <svg className='footer__icon'>
                  <use xlinkHref='/images/icons.svg#icon-location'></use>
                </svg>
                <a
                  href='https://maps.app.goo.gl/vMZ3EpXPnHFzzAso6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__contact'
                >
                  123 Street, New York, USA
                </a>
              </div>
            </div>
          </div>
          <div className='footer__gallery'>
            <h2 className='footer__title'>Gallery</h2>
            <div className='footer__photo-container'>
              <img
                className='footer__photo'
                src='/images/gallery1.png'
                alt='Beauty'
              />
              <img
                className='footer__photo'
                src='/images/gallery2.png'
                alt='Beauty'
              />
              <img
                className='footer__photo'
                src='/images/gallery3.png'
                alt='Beauty'
              />
              <img
                className='footer__photo'
                src='/images/gallery4.png'
                alt='Beauty'
              />
              <img
                className='footer__photo'
                src='/images/gallery5.png'
                alt='Beauty'
              />
              <img
                className='footer__photo'
                src='/images/gallery6.png'
                alt='Beauty'
              />
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <p>© 2024 Triptopia. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
