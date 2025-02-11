import React, { useState } from 'react';
import { mealsData } from './menu-data';
import MealOptionsModal from './MealOptionsModal';
import './menu.css';

const FoodMenu = ({ type, onAddAge }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMealSelect = (meal) => {
    if (selectedMeal) {
      onAddAge(-selectedMeal.ageValue); // ✅ Remove previous meal's AGE value
    }
    
    setSelectedMeal(meal);
    onAddAge(meal.ageValue); // ✅ Add new meal's AGE value
    setShowModal(false);
  };

  return (
    <div className="food-menu">
      <h2 className="meal-type">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
      <div className="meal" onClick={() => setShowModal(true)}>
        {selectedMeal ? (
          <img src={selectedMeal.img} alt={selectedMeal.name} />
        ) : (
          <p>Select a meal</p>
        )}
      </div>
      {selectedMeal && (
        <div className="meal-info">
          <h3>{selectedMeal.name}</h3>
          <p>AGE Value: {selectedMeal.ageValue}</p>
        </div>
      )}
      {showModal && (
        <MealOptionsModal
          type={type}
          onSelect={handleMealSelect}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FoodMenu;
