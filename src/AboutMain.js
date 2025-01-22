import React, { useState, useEffect, useRef } from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  const [index, setIndex] = useState(0);
  const thumbsRef = useRef([]);
  const infoSliderRef = useRef(null);
  const imgSliderRef = useRef(null);
  const itemsRef = useRef([]);

  const handleThumbClick = (ind) => {
    setIndex(ind);
  };

  useEffect(() => {
    // Update the selected thumb
    thumbsRef.current.forEach((thumb, ind) => {
      if (thumb) {
        thumb.classList.toggle('selected', ind === index);
      }
    });

    // Update the info slider position
    if (infoSliderRef.current) {
      infoSliderRef.current.style.transform = `translateY(${index * -100}%)`;
    }

    // Update the image slider position
    if (imgSliderRef.current) {
      imgSliderRef.current.style.transform = `translateX(${index * -100}%)`;
    }

    // Update the active item
    itemsRef.current.forEach((item, ind) => {
      if (item) {
        item.classList.toggle('active', ind === index);
      }
    });
  }, [index]);

  return (
    <div className="slider">
      <ul className="thumb">
        {Array.from({ length: 5 }).map((_, ind) => (
          <li
            key={ind}
            ref={(el) => (thumbsRef.current[ind] = el)}
            onClick={() => handleThumbClick(ind)}
          >
            Thumb {ind + 1}
          </li>
        ))}
      </ul>
      <div className="info-slider" ref={infoSliderRef}>
        {Array.from({ length: 5 }).map((_, ind) => (
          <div className="info-slide" key={ind}>
            Info Slide {ind + 1}
          </div>
        ))}
      </div>
      <div className="img-slider" ref={imgSliderRef}>
        {Array.from({ length: 5 }).map((_, ind) => (
          <div className="img-slide" key={ind}>
            <img src={`image${ind + 1}.jpg`} alt={`Slide ${ind + 1}`} />
          </div>
        ))}
      </div>
      <div className="items">
        {Array.from({ length: 5 }).map((_, ind) => (
          <div
            className="item"
            key={ind}
            ref={(el) => (itemsRef.current[ind] = el)}
          >
            Item {ind + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;