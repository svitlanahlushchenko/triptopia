import React from 'react';

function PricingTarifs() {
  const cards = [
    {
      id: 1,
      tarif: 'basic',
      price: '$29',
    },
    {
      id: 2,
      tarif: 'standart',
      price: '$69',
    },
    {
      id: 3,
      tarif: 'premium',
      price: '$99',
    },
  ];
  return (
    <section className='pricing-section container'>
      <p className='accent-text'>pricing</p>
      <h2 className='section-title pricing-section__title'>
        Unpacking Your Travel Questions
      </h2>
      <div className='pricing-section__cards'>
        {cards.map(card => (
          <div key={card.id} className='pricing-section__card'>
            <p className='pricing-section__card-tarif'>{card.tarif}</p>
            <p className='pricing-section__card-price'>{card.price}</p>
            <ul className='pricing-section__card-menu'>
              <li>Graphic Design Module</li>
              <li>Front-end Module</li>
              <li>Marketing Module</li>
              <li>30 Minutes Mentor Class</li>
            </ul>
            <button className='light-blue-button'>
              start 14 days free trial
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingTarifs;
