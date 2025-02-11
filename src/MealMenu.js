import React, { useState } from 'react';
import FoodMenu from './menu';
import './menu.css';

const MealMenu = () => {
  const [totalAGE, setTotalAGE] = useState(0);

  const handleAddAge = (ageValue) => {
    setTotalAGE((prevTotal) => prevTotal + ageValue);
  };

  return (
    <div className="app">
      <h1>DYNAMIC PAGE: Meal Menu</h1>
      {["breakfast", "secondBreakfast", "lunch", "dinner"].map((mealType) => (
        <FoodMenu key={mealType} type={mealType} onAddAge={handleAddAge} />
      ))}
      <div className="total-age">
        Total A.G.E Value: {totalAGE}
      </div>
    </div>
  );
};

export default MealMenu;
