import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ToursSection() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = tourId => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [tourId]: !prevFavorites[tourId],
    }));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const tours = [
    {
      id: 'tour1',
      image: '/images/colombian-coffee-trails.png',
      location: 'Istanbul, Turkey',
      title: 'Colombian Coffee Trails',
      price: 150,
    },
    {
      id: 'tour2',
      image: '/images/bangkok.png',
      location: 'Pokhara, Bangkok',
      title: 'Royal Himachal',
      price: 120,
    },
    {
      id: 'tour3',
      image: '/images/maldeves.png',
      location: 'Istanbul, Turkey',
      title: 'Maldeves',
      price: 170,
    },
  ];

  return (
    <section className='tours-section container'>
      <div className='tours-section__text-container'>
        <p className='accent-text'>popular destination</p>
        <h2 className='section-title'>
          Vacations To Make Your Experience Enjoyable
        </h2>
      </div>
      <div className='big-container'>
        <Slider className='tours-section__slider' {...settings}>
          {tours.map(tour => (
            <div key={tour.id} className='tours-section__tour'>
              <img src={tour.image} alt={tour.title}></img>
              <button
                className='tours-section__fav-button'
                onClick={() => toggleFavorite(tour.id)}
              >
                <svg
                  className={`tours-section__fav-icon ${
                    favorites[tour.id] ? 'tours-section__fav-icon--active' : ''
                  }`}
                >
                  <use xlinkHref='/images/icons.svg#icon-fav'></use>
                </svg>
              </button>
              <div className='tours-section__tour-location'>
                <svg className='tours-section__location-icon'>
                  <use xlinkHref='/images/icons.svg#icon-location'></use>
                </svg>
                <p>{tour.location}</p>
              </div>
              <h3 className='tours-section__tour-title'>{tour.title}</h3>
              <div className='tours-section__review'>
                {/* Star icons and reviews */}
                <svg className='tours-section__star-icon'>
                  <use xlinkHref='/images/icons.svg#icon-star'></use>
                </svg>
                <svg className='tours-section__star-icon'>
                  <use xlinkHref='/images/icons.svg#icon-star'></use>
                </svg>
                <svg className='tours-section__star-icon'>
                  <use xlinkHref='/images/icons.svg#icon-star'></use>
                </svg>
                <svg className='tours-section__star-icon'>
                  <use xlinkHref='/images/icons.svg#icon-star'></use>
                </svg>
                <p>5.0(35)</p>
              </div>
              <div className='tours-section__price'>
                <p>
                  <span className='tours-section__accent'>${tour.price}</span>
                  /Person
                </p>
                <button className='orange-button'>Book Trip</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ToursSection;
