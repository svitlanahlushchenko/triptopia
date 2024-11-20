import React from 'react';

function PricingHeroSection() {
  const sectionStyle = {
    backgroundImage: new URL('/images/secondary-hero-background.png'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <section
      style={sectionStyle}
      className='hero-section-secondary big-container'
    >
      <h2 className='hero-section-secondary__title'>Pricing</h2>
      <div className='hero-section-secondary__text'>
        <p>Home</p>
        <p className='hero-section-secondary__text-accent'>Pricing</p>
      </div>
    </section>
  );
}

export default PricingHeroSection;
