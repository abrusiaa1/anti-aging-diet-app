import React from 'react';
import { mealsData } from './menu-data';
import './MealOptionsModal.css';

const MealOptionsModal = ({ type = "", onSelect, onClose }) => {
  const formattedType = type.toLowerCase().replace(/\s+/g, '');
  const randomMeals = mealsData[formattedType] 
    ? mealsData[formattedType].sort(() => 0.5 - Math.random()).slice(0, 6) 
    : [];

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h3>Select a {type || "Meal"}</h3>
        <div className="meal-options">
          {randomMeals.map((meal) => (
            <div key={meal.name} className="meal-option" onClick={() => onSelect(meal)}>
              <img src={meal.img} alt={meal.name} />
              <p>{meal.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealOptionsModal;
