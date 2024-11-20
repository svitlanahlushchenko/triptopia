import React from 'react';

function DestinationContent() {
  const destinations = [
    {
      id: 1,
      image: '/images/lao-landing-iceland.png',
      rating: '5.0',
      title: 'Lao landing Iceland',
      trips: 'Krabal, 100 Trips',
    },
    {
      id: 2,
      image: '/images/ladakh-india.png',
      rating: '4.9',
      title: 'Ladakh India',
      trips: 'India, 78 Trips',
    },
    {
      id: 3,
      image: '/images/bosphorus-trip.png',
      rating: '4.6',
      title: 'Bosphorus Trip',
      trips: 'Istanbul, 150 Trips',
    },
    {
      id: 4,
      image: '/images/pryde-mountains.png',
      rating: '5.0',
      title: 'Pryde mountains',
      trips: 'Prydelands, 120 Trips',
    },
    {
      id: 5,
      image: '/images/bosphorus-trip-mountain.png',
      rating: '4.8',
      title: 'Bosphorus Trip',
      trips: 'Istanbul, 350 Trips',
    },
    {
      id: 6,
      image: '/images/eiffel-tower.png',
      rating: '5.0',
      title: 'Eiffel Tower',
      trips: 'France, 150 Trips',
    },
    {
      id: 7,
      image: '/images/pryde-mountains-double.png',
      rating: '5.0',
      title: 'Pryde mountains',
      trips: 'Prydelands, 100 Trips',
    },
    {
      id: 8,
      image: '/images/lao-landing.png',
      rating: '4.4',
      title: 'Lao landing Iceland',
      trips: 'Krabal, 100 Trips',
    },
    {
      id: 9,
      image: '/images/jammu-kashmir.png',
      rating: '4.7',
      title: 'Jammu Kashmir',
      trips: 'India, 100 Trips',
    },
  ];
  return (
    <section className='destionation container'>
      <div className='destination__container'>
        {destinations.map(destination => (
          <div key={destination.id} className='destination__card'>
            <img
              className='destination__image'
              src={destination.image}
              alt={destination.title}
            ></img>
            <p className='destination__rating'>{destination.rating}</p>
            <h3 className='destination__title'>{destination.title}</h3>
            <p className='destination__trips'>{destination.trips}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationContent;
