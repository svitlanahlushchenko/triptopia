import React from 'react';

function AboutTeam() {
  const workers = [
    {
      id: 1,
      image: '/images/Vasili-Ilmaz.png',
      name: 'Vasili Ilmaz',
      post: 'Web Developer',
    },
    {
      id: 2,
      image: '/images/Veronika.png',
      name: 'Veronica',
      post: 'Product Designer',
    },
    {
      id: 3,
      image: '/images/Lion-Jonson.png',
      name: 'Lion Jonson',
      post: 'Web Developer',
    },
  ];
  return (
    <section className='team-section container'>
      <p className='accent-text'>our team</p>
      <h2 className='section-title team-section__title'>
        Meet the Creative Minds Behind Triptopia
      </h2>
      <div className='team-section__wokers'>
        {workers.map(woker => (
          <div key={woker.id} className='team-section__woker-card'>
            <img
              className='team-section__woker-photo'
              src={woker.image}
              alt={woker.name}
            ></img>
            <div className='team-section__woker-info'>
              <h3 className='team-section__woker-title'>{woker.name}</h3>
              <p>{woker.post}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;
