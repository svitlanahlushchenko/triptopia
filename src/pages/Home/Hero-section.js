import React from 'react';
import Slider from 'react-slick';
import OptionsTable from './HeroTable';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServicesSection from './Servises-section';

const HeroSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };
  const sectionStyle = {
    backgroundImage: new URL('/images/hero-background.png'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <main style={sectionStyle} className='hero-section big-container'>
      <div className='hero-section__container container'>
        <div className='hero-section__text-container'>
          <p className='hero-section__accent-text'>Start Travelling with us</p>
          <h1 className='hero-section__title'>
            Let’s enjoy your desired trip with Tourice
          </h1>
          <p className='hero-section__text'>
            The traveller where you can select your desired activity and
            destinations of your choice for vacations.
          </p>
        </div>
        <div className='hero-section__photo-container'>
          <Slider {...settings}>
            <img src='/images/hero-photo1.png' alt='Hero 1' />
            <img src='/images/hero-photo2.png' alt='Hero 2' />
            <img src='/images/hero-photo3.png' alt='Hero 3' />
            <img src='/images/hero-photo4.png' alt='Hero 4' />
            <img src='/images/lao-landing-iceland.png' alt='Hero 5' />
            <img src='/images/house-on-water.png' alt='Hero 6'></img>
          </Slider>
        </div>
      </div>
      <div className='hero-section__form container'>
        <OptionsTable />
      </div>
      <ServicesSection />
    </main>
  );
};

export default HeroSection;
