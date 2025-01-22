import React, { useState } from 'react';
import './Aubrey.css';

const Aubrey = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    { title: 'Rejuvenation Research', description: 'Explore how Aubrey de Greys research aims to extend human healthspan through innovative approaches.', image: 'path/to/image1.jpg' },
    { title: 'SENS Strategies', description: 'Aubrey de Greys Strategies for Engineered Negligible Senescence (SENS) focus on repairing cellular damage to achieve rejuvenation.', image: 'path/to/image2.jpg' },
    { title: 'Mitochondrial Mutations', description: 'Investigating mitochondrial mutations and their role in aging, as part of Aubrey de Greys comprehensive approach to longevity.', image: 'path/to/image3.jpg' }
  ];

  const timelineData = [
    { year: '1999', event: 'Published the "Strategies for Engineered Negligible Senescence (SENS)" concept.' },
    { year: '2009', event: 'Co-founded the SENS Research Foundation.' },
    { year: '2017', event: 'Published significant research on cellular repair and rejuvenation therapies.' }
  ];

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div className="aubrey-de-grey-page">
      {/* Intro Section */}
      <section className="aubrey-intro-section">
                <h1 className="aubrey-h">Aubrey De Grey</h1>
                <p>
                    Aubrey de Grey is a biomedical gerontologist known for his provocative views on aging and longevity.
                    He co-founded the SENS Research Foundation, which focuses on developing rejuvenation biotechnologies
                    to combat aging. De Grey advocates for a proactive approach to aging, suggesting that through advanced
                    therapies (like regenerative medicine and genetic engineering), we could potentially reverse age-related
                    damage. His "Seven Deadly Sins of Aging" framework outlines specific areas where interventions could
                    restore youthful function.
                </p>
            </section>

      {/* Carousel Section */}
      <section className="aubrey-carousel-section">
        <div className="aubrey-carousel-slide" style={{ backgroundImage: `url(${carouselData[carouselIndex].image})` }}>
          <h2 className='aubrey-h'>{carouselData[carouselIndex].title}</h2>
          <p>{carouselData[carouselIndex].description}</p>
        </div>
        <button onClick={nextSlide} className="aubrey-carousel-button">Next</button>
      </section>

{/* Video Section */}
<section className="aubrey-video-section">
  <h2 className='aubrey-h'>Watch David Sinclair Speak</h2>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/S6ARUQ5LoUo?si=HsCzzYQq7oEBnRc5"
    title="David Sinclair Lecture"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</section>


      {/* Timeline Section */}
      <section className="aubrey-timeline-section">
        <h2 className='aubrey-h'>Major Milestones</h2>
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

export default Aubrey;
