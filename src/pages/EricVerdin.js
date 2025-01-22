// src/pages/EricVerdin.js

import React, { useState } from 'react';
import './EricVerdin.css';

const EricVerdin = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    { title: 'Research on Aging and Inflammation', description: 'Insights into the impact of inflammation on the aging process.', image: 'path/to/image1.jpg' },
    { title: 'Metabolic Health and Longevity', description: 'Studying the metabolic changes that influence healthy aging.', image: 'path/to/image2.jpg' },
    { title: 'Eric Verdin\'s Key Recommendations', description: 'Tips for enhancing longevity through balanced nutrition and lifestyle.', image: 'path/to/image3.jpg' }
  ];

  const timelineData = [
    { year: '2012', event: 'Became President and CEO of the Buck Institute for Research on Aging.' },
    { year: '2015', event: 'Published groundbreaking research on the links between metabolism and aging.' },
    { year: '2021', event: 'Initiated new studies exploring diet\'s role in age-related diseases.' }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="eric-verdin-page">
      {/* Intro Section */}
      <section className="verdin-intro-section">
        <h1 className="verdin-h">Eric Verdin</h1>
        <p>Dr. Eric Verdin is a leader in aging research, focusing on metabolic health, inflammation, and the role of diet in aging. His work is paving the way for new approaches to enhance longevity and health span.</p>
      </section>

      {/* Carousel Section */}
      <section className="verdin-carousel-section">
        <div className="verdin-carousel-slide" style={{ backgroundImage: `url(${carouselData[carouselIndex].image})` }}>
          <h2 className='verdin-h'>{carouselData[carouselIndex].title}</h2>
          <p>{carouselData[carouselIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="verdin-carousel-button">Next</button>
      </section>

      {/* Video Section */}
      <section className="verdin-video-section">
        <h2 className='verdin-h'>Watch Eric Verdin Speak</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wk-bpDm4ExU?si=r8AsKsQ_vH8OWZL9"
          title="Eric Verdin Talk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Timeline Section */}
      <section className="verdin-timeline-section">
      <h2 className="verdin-h">Major Milestones</h2>
      <ul>
        {timelineData.map((item, index) => (
          <li key={index}>
            <strong>{item.year}:</strong> {item.event}
          </li>
        ))}
      </ul>
    </section>
  </div>
);
};

export default EricVerdin;

