import React from 'react';

function ReviewsSection() {
  const reviews = [
    {
      id: '1',
      text: "As a seasoned traveler, I can confidently say that Tourice is one of the best travel agencies I've had the pleasure of working.",
      rating: 5,
      image: '/images/Peter-Parker.png',
      name: 'Peter Parker',
      profession: 'Founder',
    },
    {
      id: '2',
      text: "As a seasoned traveler, I can confidently say that Tourice is one of the best travel agencies I've had the pleasure of working.",
      rating: 5,
      image: '/images/John-Snow.png',
      name: 'John Snow',
      profession: 'Customer',
    },
    {
      id: '3',
      text: "As a seasoned traveler, I can confidently say that Tourice is one of the best travel agencies I've had the pleasure of working.",
      rating: 5,
      image: '/images/John-Doe.png',
      name: 'John Doe',
      profession: 'Customer',
    },
  ];
  return (
    <section className='reviews-section container'>
      <img src='/images/reviews-girls.png' alt='Girls'></img>
      <div className='reviews-section__container'>
        <div className='revies-section__title-container'>
          <p className='accent-text'>testimonial</p>
          <h2 className='section-title'>What Customer Said About Us</h2>
        </div>
        <div className='reviews-section__reviews'>
          {reviews.map(review => (
            <div key={review.id} className='reviews-section__review'>
              <p>{review.text}</p>
              <div className='reviews-section__review-stars'>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg key={index} className='reviews-section__star-icon'>
                    <use xlinkHref='/images/icons.svg#icon-star'></use>
                  </svg>
                ))}
              </div>
              <div className='reviews-section__person'>
                <img src={review.image} alt={review.name}></img>
                <div className='reviews-section__person-info'>
                  <h3 className='reviews-section__person-name'>
                    {review.name}
                  </h3>
                  <p>{review.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
