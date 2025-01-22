import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

import img1 from './assets/img1.png';
import thumb1 from './assets/thumb1.png';
import img2 from './assets/img2.png';
import thumb2 from './assets/thumb2.png';
import img3 from './assets/img3.png';
import thumb3 from './assets/thumb3.png';
import img4 from './assets/img4.png';
import thumb4 from './assets/thumb4.png';
import img5 from './assets/img5.png';
import thumb5 from './assets/thumb5.png';

// Carousel items data with individual links
const carouselItems = [
  { title : 'David Sinclair', description: 'David Sinclair is a prominent biologist known for his research on aging and longevity, particularly the role of sirtuins, a class of proteins that play a critical role in cellular health and metabolism. He advocates for a combination of lifestyle changes, including caloric restriction, intermittent fasting, and specific supplements (like resveratrol), that can activate sirtuins and promote longevity. Sinclair emphasizes the potential for reversing aging through scientific advancements and a deep understanding of genetic mechanisms.',
     imgSrc: img1, thumbSrc: thumb1, link: '/davidsinclair' },
  { title: 'Michael Greger', description: 'Michael Greger is a physician and author known for his advocacy of plant-based nutrition as a means to prevent and reverse chronic diseases, including those related to aging. He founded the nonprofit organization NutritionFacts.org, which provides evidence-based information on the health benefits of whole-food, plant-based diets. Greger emphasizes the impact of dietary choices on longevity and overall health, advocating for a diet rich in fruits, vegetables, whole grains, and legumes to promote well-being and prevent aging-related diseases.',
     imgSrc: img2, thumbSrc: thumb2, link: '/michaelgreger' },
  { title: 'Aubrey De Grey', description: 'Aubrey de Grey is a biomedical gerontologist known for his provocative views on aging and longevity. He co-founded the SENS Research Foundation, which focuses on developing rejuvenation biotechnologies to combat aging. De Grey advocates for a proactive approach to aging, suggesting that through advanced therapies (like regenerative medicine and genetic engineering), we could potentially reverse age-related damage. His "Seven Deadly Sins of Aging" framework outlines specific areas where interventions could restore youthful function.', 
    imgSrc: img3, thumbSrc: thumb3, link: '/aubrey' },
  { title: 'Valter Longo', description: 'Valter Longo is a biochemist and researcher known for his work on the role of fasting and dietary restriction in promoting longevity. He developed the Fasting Mimicking Diet (FMD), which is designed to provide the benefits of fasting—such as reduced inflammation and cellular regeneration—while still allowing for nutrient intake. Longos research emphasizes the importance of periodic fasting and plant-based diets to extend healthspan and prevent age-related diseases.',
     imgSrc: img4, thumbSrc: thumb4, link: '/valterlongo' },
  { title: 'Eric Verdin', description: 'Eric Verdin is a prominent researcher in the field of aging and metabolism, currently serving as the president and CEO of the Buck Institute for Research on Aging. His work primarily focuses on understanding how metabolism and nutrient sensing influence aging and age-related diseases.', 
    imgSrc: img5, thumbSrc: thumb5, link: '/ericverdin' },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`carousel character-${activeIndex}`}>
      <div className="item active">
        <div className="bg"></div>
        <div className="info-box">
          <h2>{carouselItems[activeIndex].title}</h2>
          <p>{carouselItems[activeIndex].description}</p>
          <Link to={carouselItems[activeIndex].link} className="btn">View More</Link>
        </div>
        <div className="img-box">
          <img src={carouselItems[activeIndex].imgSrc} alt={carouselItems[activeIndex].title} />
        </div>
      </div>

      <ul className="thumb">
        {carouselItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'selected' : ''}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.thumbSrc} alt={`Thumbnail ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
