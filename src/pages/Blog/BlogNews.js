import React, { useState, useEffect } from 'react';

function BlogNewsSection() {
  const newsData = [
    {
      id: 1,
      image: '/images/people-on-beach.png',
      title:
        "Anatolian Adventure: Off-the-Beaten-Path Discoveries in Turkey's Heartland",
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '12 March 2024',
      comment: '1k',
      share: '1.5k',
    },
    {
      id: 2,
      image: '/images/mountains.png',
      title:
        'Soaking in the Natural Thermal Springs and Cotton Castle Terraces',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '28 June 2024',
      comment: '1k',
      share: '750',
    },
    {
      id: 3,
      image: '/images/night-mountains.png',
      title: 'Stargazing in the Mountains',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '15 August 2024',
      comment: '1.5k',
      share: '2.4k',
    },
    {
      id: 4,
      image: '/images/night-mountains.png',
      title: 'Stargazing in the Mountains',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '15 August 2024',
      comment: '1.5k',
      share: '2.4k',
    },
    {
      id: 5,
      image: '/images/people-on-beach.png',
      title:
        "Anatolian Adventure: Off-the-Beaten-Path Discoveries in Turkey's Heartland",
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '12 March 2024',
      comment: '1k',
      share: '1.5k',
    },
    {
      id: 6,
      image: '/images/mountains.png',
      title:
        'Soaking in the Natural Thermal Springs and Cotton Castle Terraces',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con quis nostrud exercitation.',
      date: '28 June 2024',
      comment: '1k',
      share: '750',
    },
  ];

  const newsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;

  const currentNews = newsData.slice(firstNewsIndex, lastNewsIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <section className='news-section container'>
      <div className='news-section__container'>
        {currentNews.map(news => (
          <div key={news.id} className='news-section__news'>
            <img src={news.image} alt={news.title}></img>
            <div className='news-section__text-container'>
              <h2 className='news-section__title'>{news.title}</h2>
              <p>{news.text}</p>
            </div>
            <div className='news-section__info-container'>
              <div className='news-section__info'>
                <div className='news-section__info-text'>
                  <svg className='news-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-date'></use>
                  </svg>
                  <p>{news.date}</p>
                </div>
                <div className='news-section__info-text'>
                  <svg className='news-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-comment'></use>
                  </svg>
                  <p>{news.comment} Comments</p>
                </div>
                <div className='news-section__info-text'>
                  <svg className='news-section__icon'>
                    <use xlinkHref='/images/icons.svg#icon-share'></use>
                  </svg>
                  <p>{news.share} Shares</p>
                </div>
              </div>
              <button className='orange-button'>Read More</button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalNews={newsData.length}
        newsPerPage={newsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}

function Pagination({ totalNews, newsPerPage, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='news-section__pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button
              className={`news-section__pagination-button ${
                number === currentPage ? 'active' : ''
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BlogNewsSection;
