import React from 'react';

function ServicesSection() {
  return (
    <section className='services-section container'>
      <div className='services-section__text'>
        <p className='accent-text'>categoties</p>
        <h2 className='section-title'>We Offer The Best Service</h2>
      </div>
      <div className='services-section__services'>
        <div className='services-section__service'>
          <div className='services-section__service-content'>
            <img
              className='services-section__service-icon'
              src='/images/sunny-cloud.png'
              alt='Sunny-Cloud'
            ></img>
            <h3 className='services-section__service-title'>
              Calculated Weather
            </h3>
            <p>Built Wicket longer admire do barton vanity itself do in it</p>
          </div>
        </div>
        <div className='services-section__service'>
          <div className='services-section__service-content'>
            <img
              className='services-section__service-icon'
              src='/images/plane.png'
              alt='Plane'
            ></img>
            <h3 className='services-section__service-title'>Best Flight</h3>
            <p>Engrossed listening. Park gate sell they west hard for</p>
          </div>
        </div>
        <div className='services-section__service'>
          <div className='services-section__service-content'>
            <img
              className='services-section__service-icon'
              src='/images/congrats.png'
              alt='Congratulations'
            ></img>
            <h3 className='services-section__service-title'>Local Events</h3>
            <p>Barton vanity itself do in it. Preferd to men it engrossed</p>
          </div>
        </div>
        <div className='services-section__service'>
          <div className='services-section__service-content'>
            <img
              className='services-section__service-icon'
              src='/images/tourists.png'
              alt='Tourists'
            ></img>
            <h3 className='services-section__service-title'>Customize Tour</h3>
            <p>We deliver outsourced aviation services for</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
