import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import FoodDetailPage from './FoodDetailPage';
import SearchResultsPage from './SearchResultsPage';
import About from './About';
import ScienceBehind from './science-behind';
import FoodMenu from './menu'; // ✅ Import FoodMenu correctly
import './menu.css'; // ✅ Ensure menu.css is applied
import MichaelGreger from './pages/MichaelGreger';
import Aubrey from './pages/Aubrey';
import ValterLongo from './pages/ValterLongo';
import DavidSinclair from './pages/DavidSinclair';
import EricVerdin from './pages/EricVerdin';

function App() {
  const [totalAGE, setTotalAGE] = useState(0);

  // ✅ Function to update AGE total
  const handleAddAge = (ageValue) => {
    setTotalAGE((prevTotal) => prevTotal + ageValue);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/food/:foodName" element={<FoodDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/science-behind" element={<ScienceBehind />} />

          {/* ✅ Fixed: Total AGE Now Updates */}
          <Route 
            path="/menu" 
            element={
              <div className="meal-menu">
                <h1 className="meal-menu-title">🍽️ Meal Menu</h1>
                <div className="meal-grid">
                  {["breakfast", "secondBreakfast", "lunch", "dinner"].map((mealType) => (
                    <FoodMenu key={mealType} type={mealType} onAddAge={handleAddAge} />
                  ))}
                </div>
                <div className="total-age">
                  <strong>Total A.G.E Value:</strong> {totalAGE}
                </div>
              </div>
            }
          />

          {/* ✅ Other pages */}
          <Route path="/davidsinclair" element={<DavidSinclair />} />
          <Route path="/michaelgreger" element={<MichaelGreger />} />
          <Route path="/aubrey" element={<Aubrey />} />
          <Route path="/valterlongo" element={<ValterLongo />} />
          <Route path="/ericverdin" element={<EricVerdin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
