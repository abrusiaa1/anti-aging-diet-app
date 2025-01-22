import React, { useState } from 'react';
import './DavidSinclair.css';

const DavidSinclair = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    { title: 'Study on Sirtuins', description: 'A recent breakthrough in understanding how sirtuins affect cellular health.', image: 'path/to/image1.jpg' },
    { title: 'NAD+ Supplementation', description: 'Research showing the benefits of NAD+ in reversing age-related decline.', image: 'path/to/image2.jpg' },
    { title: 'Gene Therapy', description: 'Exploring genetic engineering to boost longevity.', image: 'path/to/image3.jpg' }
  ];

  const timelineData = [
    { year: '2003', event: 'Discovery of the role of sirtuins in aging.' },
    { year: '2013', event: 'Research on NAD+ as a key molecule in cellular rejuvenation.' },
    { year: '2020', event: 'Published “Lifespan: Why We Age – and Why We Don’t Have To”.' }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="david-sinclair-page">
      {/* Intro Section */}
      <section className="intro-section">
        <h1 className="david-h">David Sinclair</h1>
        <p>David Sinclair is a renowned scientist known for his research on sirtuins, NAD+, and their roles in cellular aging. His groundbreaking work has paved the way for advancements in biotechnology and anti-aging research.</p>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="carousel-slide" style={{ backgroundImage: `url(${carouselData[carouselIndex].image})` }}>
          <h2 className='david-h'>{carouselData[carouselIndex].title}</h2>
          <p>{carouselData[carouselIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="carousel-button">Next</button>
      </section>

{/* Video Section */}
<section className="video-section">
  <h2 className='david-h'>Watch David Sinclair Speak</h2>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/n9IxomBusuw"
    title="David Sinclair Lecture"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</section>


      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className='david-h'>Major Milestones</h2>
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

export default DavidSinclair;
