import React from 'react';

const cards = [
  {
    id: 'card1',
    image: '/images/Qatar-places.png',
    title: 'Qatar',
    plaсes: '196',
  },
  {
    id: 'card2',
    image: '/images/barbados-places.png',
    title: 'Barbados',
    places: '196',
  },
  {
    id: 'card3',
    image: '/images/hungary-places.png',
    title: 'Hungary',
    places: '196',
  },
  {
    id: 'card4',
    image: '/images/netherland-places.png',
    title: 'Netherlands',
    places: '196',
  },
  {
    id: 'card5',
    image: '/images/uganda-places.png',
    title: 'Uganda',
    places: '196',
  },
  {
    id: 'card6',
    image: '/images/eritrea-places.png',
    title: 'Eritrea',
    places: '196',
  },
  {
    id: 'card7',
    image: '/images/gambia-places.png',
    title: 'Gambia',
    places: '196',
  },
  {
    id: 'card8',
    image: '/images/lebanon-places.png',
    title: 'Lebanon',
    places: '196',
  },
];

function PlacesSection() {
  return (
    <section className='places-section container'>
      <div className='places-section__text-container'>
        <p className='accent-text'>Top Destination</p>
        <h2 className='section-title'>Search a best place in the world</h2>
        <p>
          Our dating website offers a range of features and benifits that make
          finding love online simple and enjoyable. With our advanced matching
          algorithm
        </p>
      </div>
      <div className='places-section__cards'>
        {cards.map(card => (
          <div key={card.id} className='places-section__card'>
            <img src={card.image} alt={card.title}></img>
            <div className='places-section__card-text'>
              <h3 className='places-section__card-title'>{card.title}</h3>
              <p>{card.plaсes} Places</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlacesSection;
