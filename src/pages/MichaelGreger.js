// src/pages/MichaelGreger.js

import React, { useState } from 'react';
import './MichaelGreger.css';

const MichaelGreger = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    { title: 'Plant-Based Diet Benefits', description: 'Extensive studies showing the impact of plant-based diets on longevity.', image: 'path/to/image1.jpg' },
    { title: 'Nutrition and Disease Prevention', description: 'How whole foods help prevent chronic diseases linked to aging.', image: 'path/to/image2.jpg' },
    { title: 'Gregers Daily Dozen', description: 'Key elements of Dr. Gregers recommendations for healthy aging.', image: 'path/to/image3.jpg' }
  ];

  const timelineData = [
    { year: '2003', event: 'Founded NutritionFacts.org to spread evidence-based health information.' },
    { year: '2015', event: 'Published “How Not to Die” focusing on dietary prevention of diseases.' },
    { year: '2020', event: 'Released “How Not to Diet” with comprehensive dietary research.' }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="michael-greger-page">
      {/* Intro Section */}
      <section className="greger-intro-section">
        <h1 className="michael-h">Michael Greger</h1>
        <p>Michael Greger is a physician and advocate for plant-based nutrition as a path to long-term health and disease prevention. His work emphasizes the impact of nutrition on overall well-being and longevity.</p>
      </section>

      {/* Carousel Section */}
      <section className="greger-carousel-section">
        <div className="greger-carousel-slide" style={{ backgroundImage: `url(${carouselData[carouselIndex].image})` }}>
          <h2 className='michael-h'>{carouselData[carouselIndex].title}</h2>
          <p>{carouselData[carouselIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="greger-carousel-button">Next</button>
      </section>

      {/* Video Section */}
      <section className="greger-video-section">
        <h2 className='michael-h'>Watch Michael Greger Speak</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AOvV9m7feKo?si=sTMWifdjRv5uPotg"
          title="Michael Greger Talk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Timeline Section */}
      <section className="greger-timeline-section">
        <h2 className='michael-h'>Major Milestones</h2>
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

export default MichaelGreger;
