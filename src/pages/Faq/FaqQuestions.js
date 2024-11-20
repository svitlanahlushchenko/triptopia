import React from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function FaqQuestions() {
  const accordionItems = [
    {
      header: 'What destinations do you offer tours to?',
      content:
        ' Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
    },
    {
      header: 'What types of service do you provide?',
      content:
        ' Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
    },
    {
      header: 'What is included in the tour package?',
      content:
        ' Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
    },
    {
      header: 'What should I pack for my trip?',
      content:
        ' Triptopia offers a range of services including web development, software development, IT consulting, digital marketing.',
    },
  ];
  return (
    <section className='questions-section big-container'>
      <div className='container'>
        <p className='accent-text'>faq</p>
        <h2 className='section-title questions-section__title'>
          Unpacking Your Travel Questions
        </h2>
        <div className='questions-section__content'>
          <img
            src='/images/faq-questions.png'
            alt='Women in the mountains'
          ></img>
          <div className='questions-section__questions'>
            <Accordion className='accordion'>
              {accordionItems.map(({ header, content }, i) => (
                <AccordionItem
                  header={header}
                  key={i}
                  className='accordion__item'
                >
                  <div className='accordion__content'>{content}</div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqQuestions;
