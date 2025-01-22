// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import FoodDetailPage from './FoodDetailPage';
import SearchResultsPage from './SearchResultsPage';
import About from './About';
import ScienceBehind from './science-behind';


import Menu from './menu';


import './App.css';

import MichaelGreger from './pages/MichaelGreger';
import Aubrey from './pages/Aubrey';
import ValterLongo from './pages/ValterLongo';
import DavidSinclair from './pages/DavidSinclair';
import EricVerdin from './pages/EricVerdin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/food/:foodName" element={<FoodDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          
          {/* Under-page Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/science-behind" element={<ScienceBehind />} />
          <Route path="/menu" element={<Menu />} />



          {/* Additional Researcher Routes */}
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
