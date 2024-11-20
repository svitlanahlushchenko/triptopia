import React from 'react';

function AboutHeroSection() {
  const sectionStyle = {
    backgroundImage: 'url(/images/secondary-hero-background.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <section
      style={sectionStyle}
      className='hero-section-secondary big-container'
    >
      <h2 className='hero-section-secondary__title'>About Us</h2>
      <div className='hero-section-secondary__text'>
        <p>Home</p>
        <p className='hero-section-secondary__text-accent'>About Us</p>
      </div>
    </section>
  );
}

export default AboutHeroSection;
