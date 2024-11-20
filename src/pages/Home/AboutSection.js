import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section className='about-section container'>
      <img src='/images/about-section.png' alt='Beautiful Photo'></img>
      <div>
        <p className='accent-text'>about us</p>
        <h2 className='section-title'>We Are The Best Travel Agency</h2>
        <div className='about-section__text-container'>
          <Link to='/about'>
            <button className='read-more-button'>
              <img src='/images/read-about-button.png' alt='Read More'></img>
            </button>
          </Link>
          <div className='about-section__text'>
            <p>
              Venenatis donec sit sit egestas varius. Dictum sit risus
              scelerisque nulla amet vel mollis sem morbi. Egestas quam
              scelerisque morbi nisi lacinia nunc.
            </p>
            <p>
              Venenatis donec sit sit egestas varius. Dictum sit risus
              scelerisque nulla amet vel mollis sem morbi. Egestas quam
              scelerisque morbi nisi lacinia nunc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
