import React from 'react';

function AboutInfo() {
  return (
    <section className='about-info container'>
      <img src='/images/about-photo.png' alt='Tourists'></img>
      <div className='about-info__text-container'>
        <p className='accent-text'>About Us</p>
        <h2 className='section-title'>See Destinations You'll Love To Visit</h2>
        <p className='about-info__text'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some There are many
          variations of passages of Lorem Ipsum available.
        </p>
        <ul className='about-info__menu'>
          <li className='about-info__menu-item'>
            <img
              className='about-info__menu-image'
              src='/images/book-with-confident.svg'
              alt='Earth'
            ></img>
            <div className='about-info__menu-text'>
              <h3 className='about-info__menu-item-title'>
                Book With Confident
              </h3>
              <p>
                Each trip is carefully crafted to leave you free to leave you
                free to live in the moment and enjoy your vacation.
              </p>
            </div>
          </li>
          <li className='about-info__menu-item'>
            <img
              className='about-info__menu-image'
              src='/images/freedom-to-discover.svg'
              alt='Baggage'
            ></img>
            <div className='about-info__menu-text'>
              <h3 className='about-info__menu-item-title'>
                Freedom to discover
              </h3>
              <p>
                Each trip is carefully crafted to leave you free to leave you
                free to live in the moment and enjoy your vacation.
              </p>
            </div>
          </li>
          <li className='about-info__menu-item'>
            <img
              className='about-info__menu-image'
              src='/images/weather-vultures.svg'
              alt='Compas'
            ></img>
            <div className='about-info__menu-text'>
              <h3 className='about-info__menu-item-title'>Weather Vultures</h3>
              <p>
                Each trip is carefully crafted to leave you free to leave you
                free to live in the moment and enjoy your vacation.
              </p>
            </div>
          </li>
        </ul>
        <button className='light-blue-button'>Book Now</button>
      </div>
    </section>
  );
}

export default AboutInfo;
