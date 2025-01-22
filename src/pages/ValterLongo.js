/* // src/pages/ValterLongo.js
import React from 'react';

const Sunblast = () => (
  <div>
    <h1>Sunblast</h1>
    <p>Detailed information about Sunblast...</p>
  </div>
);

export default Sunblast; */

// src/pages/ValterLongo.js

import React, { useState } from 'react';
import './ValterLongo.css';

const ValterLongo = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    { title: 'Fasting-Mimicking Diet', description: 'Research on fasting and its role in longevity and disease prevention.', image: 'path/to/image1.jpg' },
    { title: 'The Longevity Diet', description: 'Nutritional approaches to enhancing lifespan and healthspan.', image: 'path/to/image2.jpg' },
    { title: 'Aging and Regeneration', description: 'Studies on how diet can influence cell regeneration and aging.', image: 'path/to/image3.jpg' }
  ];

  const timelineData = [
    { year: '2016', event: 'Published “The Longevity Diet” outlining fasting-mimicking principles.' },
    { year: '2018', event: 'Founded the Valter Longo Foundation promoting longevity research.' },
    { year: '2021', event: 'Expanded research into diet’s effects on age-related diseases.' }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="valter-longo-page">
      {/* Intro Section */}
      <section className="longo-intro-section">
        <h1 className="valter-h">Valter Longo</h1>
        <p>Valter Longo is a biochemist and longevity researcher, renowned for his work on fasting and nutrition’s impact on aging. His research focuses on dietary practices to promote a healthy lifespan.</p>
      </section>

      {/* Carousel Section */}
      <section className="longo-carousel-section">
        <div className="longo-carousel-slide" style={{ backgroundImage: `url(${carouselData[carouselIndex].image})` }}>
          <h2 className="valter-h">{carouselData[carouselIndex].title}</h2>
          <p>{carouselData[carouselIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="longo-carousel-button">Next</button>
      </section>

      {/* Video Section */}
      <section className="longo-video-section">
        <h2 className="valter-h">Watch Valter Longo Speak</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/06ROURlX6o4?si=MbjWUIBnlLVeyduu"
          title="Valter Longo Talk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Timeline Section */}
      <section className="longo-timeline-section">
        <h2 className="valter-h">Major Milestones</h2>
        <ul>
          {timelineData.map((item, index) => (
            <li key={index}>
            <strong>{item.year}</strong>: {item.event}
          </li>
        ))}
      </ul>
    </section>
  </div>
);
};

export default ValterLongo;
