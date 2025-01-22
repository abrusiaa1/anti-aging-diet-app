import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './HomePage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for hamburger menu
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
    document.body.classList.toggle('menu-open'); // Toggle body class to shift content
    
  };

  

  const faqData = [
    {
      question: "What is anti-aging?",
      answer: "Anti-aging refers to slowing down or reversing the aging process, typically through diet, exercise, and skincare."
    },
    {
      question: "Which foods promote anti-aging?",
      answer: "Foods rich in antioxidants, vitamins, and minerals like fruits, vegetables, nuts, and fish are known to have anti-aging properties."
    },
    {
      question: "How much water should I drink daily?",
      answer: "It is recommended to drink at least 8 glasses (2 liters) of water a day to keep your skin hydrated and healthy."
    },
    {
      question: "Are there any supplements for anti-aging?",
      answer: "Common supplements for anti-aging include collagen, vitamin C, and omega-3 fatty acids."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    fade: true, 
    className: "modern-carousel",
  };

  return (
    <div className="home-page">
      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/science-behind">Science Behind</Link></li>
            <li><Link to="/diet">Diet</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </div>

        {/* Optional overlay for dimming the background */}
        <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={toggleMenu}></div>
      </div>

      {/* Shifting content area */}
      <div className={`content ${isMenuOpen ? 'menu-open' : ''}`}>
        <h1>Anti Aging Guide</h1>

        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for any food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {/* Fruits & Vegetables Section */}
        <div name="FruitsVegetables">
          <h2>Fruits & Vegetables</h2>
          <div className="category-grid">
          <Link to="/category/fruits" className="category-card">
            <img src="/fruit.jpg" alt="Fruits" />
            <h3>Fruits</h3>
          </Link>
          <Link to="/category/vegetables" className="category-card">
            <img src="/vegetables.jpg" alt="Vegetables" />
            <h3>Vegetables</h3>
          </Link>
          <Link to="/category/legumes" className="category-card">
            <img src="/mushrooms.jpg" alt="Legumes" />
            <h3>Legumes</h3>
          </Link>
          <Link to="/category/starchyvegetables" className="category-card">
            <img src="/salad.jpg" alt="Starchy Vegetables" />
            <h3>Starchy Vegetables</h3>
          </Link>
        </div>
      </div>

      {/* Meats Section */}
      <div name="Meats">
        <h2>Meats</h2>
        <div className="category-grid">
          <Link to="/category/chickenturkey" className="category-card">
            <img src="/chicken.jpg" alt="Chicken & Turkey" />
            <h3>Chicken & Turkey</h3>
          </Link>
          <Link to="/category/beef" className="category-card">
            <img src="/beef.jpg" alt="Beef" />
            <h3>Beef</h3>
          </Link>
          <Link to="/category/pork" className="category-card">
            <img src="/pork.jpg" alt="Pork" />
            <h3>Pork</h3>
          </Link>
          <Link to="/category/fish" className="category-card">
            <img src="/fish.jpg" alt="Fish" />
            <h3>Fish</h3>
          </Link>
          <Link to="/category/lamb" className="category-card">
            <img src="/lamb.jpg" alt="Lamb" />
            <h3>Lamb</h3>
          </Link>
          <Link to="/category/veal" className="category-card">
            <img src="/veal.jpg" alt="Veal" />
            <h3>Veal</h3>
          </Link>
        </div>
      </div>

      {/* Protein-Rich Foods Section */}
      <div name="ProteinRichFoods">
        <h2>Protein-Rich Foods</h2>
        <div className="category-grid">
          <Link to="/category/cheese" className="category-card">
            <img src="/cheese.jpg" alt="Cheese" />
            <h3>Cheese</h3>
          </Link>
          <Link to="/category/tofu" className="category-card">
            <img src="/tofu.jpg" alt="Tofu" />
            <h3>Tofu</h3>
          </Link>
          <Link to="/category/eggs" className="category-card">
            <img src="/eggs.jpg" alt="Eggs" />
            <h3>Eggs</h3>
          </Link>
          <Link to="/category/milk" className="category-card">
            <img src="/milk.jpg" alt="Milk" />
            <h3>Milk</h3>
          </Link>
          <Link to="/category/yoghurt" className="category-card">
            <img src="/yoghurt.jpg" alt="Yoghurt" />
            <h3>Yoghurt</h3>
          </Link>
        </div>
      </div>

      {/* Fats Section */}
      <div name="Fats">
        <h2>Fats</h2>
        <div className="category-grid">
          <Link to="/category/margarinebutter" className="category-card">
            <img src="/butter.jpg" alt="Margarine & Butter" />
            <h3>Margarine & Butter</h3>
          </Link>
          <Link to="/category/nutsseeds" className="category-card">
            <img src="/nuts.jpg" alt="Nuts & Seeds" />
            <h3>Nuts & Seeds</h3>
          </Link>
          <Link to="/category/fatsliquids" className="category-card">
            <img src="/oils.jpg" alt="Fats, Liquids" />
            <h3>Fats, Liquids</h3>
          </Link>
        </div>
      </div>

      {/* Carbs Section */}
      <div name="Carbs">
        <h2>Carbs</h2>
        <div className="category-grid">
          <Link to="/category/bakedgoods" className="category-card">
            <img src="/bakedgoods.jpg" alt="Baked Goods" />
            <h3>Baked Goods</h3>
          </Link>
          <Link to="/category/cereals" className="category-card">
            <img src="/cereals.jpg" alt="Cereals" />
            <h3>Cereals</h3>
          </Link>
          <Link to="/category/breakfastfoods" className="category-card">
            <img src="/breakfast.jpg" alt="Breakfast Foods" />
            <h3>Breakfast Foods</h3>
          </Link>
          <Link to="/category/snackscrackers" className="category-card">
            <img src="/snacks.jpg" alt="Snacks & Crackers" />
            <h3>Snacks & Crackers</h3>
          </Link>
          <Link to="/category/pastries" className="category-card">
            <img src="/pastries.jpg" alt="Pastries" />
            <h3>Pastries</h3>
          </Link>
          <Link to="/category/sugar" className="category-card">
            <img src="/sugar.jpg" alt="Sugar" />
            <h3>Sugar</h3>
          </Link>
        </div>
      </div>

      {/* Meals & Dishes Section */}
      <div name="MealsDishes">
        <h2>Meals & Dishes</h2>
        <div className="category-grid">
        <Link to="/category/plantbased" className="category-card">
            <img src="/plantbased.jpg" alt="Plant-Based" />
            <h3>Plant-Based</h3>
          </Link>
          <Link to="/category/balanced" className="category-card">
            <img src="/balanced.jpg" alt="Balanced" />
            <h3>Balanced</h3>
          </Link>
          <Link to="/category/vegan" className="category-card">
            <img src="/vegan.jpg" alt="Vegan" />
            <h3>Vegan</h3>
          </Link>
          <Link to="/category/pescatarianism" className="category-card">
            <img src="/pescatarian.jpg" alt="Pescatarianism" />
            <h3>Pescatarianism</h3>
          </Link>

        </div>
      </div>

      {/* Liquids Section */}
      <div name="Liquids">
        <h2>Liquids</h2>
        <div className="category-grid">
        <Link to="/category/soups" className="category-card">
            <img src="/soups.jpg" alt="Soups" />
            <h3>Soups</h3>
          </Link>
          <Link to="/category/sauces" className="category-card">
            <img src="/sauces.jpg" alt="Sauces" />
            <h3>Sauces</h3>
          </Link>
          <Link to="/category/coffeetea" className="category-card">
            <img src="/coffeetea.jpg" alt="Coffee and Tea" />
            <h3>Coffee & Tea</h3>
          </Link>
          <Link to="/category/sugarydrinks" className="category-card">
            <img src="/sugarydrinks.jpg" alt="Sugary Drinks" />
            <h3>Sugary Drinks</h3>
          </Link>
          <Link to="/category/alcoholicbeverages" className="category-card">
            <img src="/wine.jpg" alt="Alcoholic Drinks" />
            <h3>Alcoholic Drinks</h3>
          </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <Slider {...settings}>
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
