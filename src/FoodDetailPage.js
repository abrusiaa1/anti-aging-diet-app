/* import React from 'react';
import { useParams } from 'react-router-dom';
import foodData from './foodData';
import './FoodDetailPage.css';

const FoodDetailPage = () => {
  const { foodName } = useParams();
  const food = foodData.find(f => f.name.toLowerCase() === foodName.toLowerCase());

  return (
    <div className="food-detail-page">
      {food ? (
        <>
          <h2>{food.name}</h2>
          <p>Preparation: {food.preparation}</p>
          <p>Preference: {food.preference}</p>
        </>
      ) : (
        <p>Food not found</p>
      )}
    </div>
  );
};

export default FoodDetailPage;
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import foodData from './foodData'; // Import your food data

const FoodDetailPage = () => {
  const { foodName } = useParams(); // Get food name from URL

  // Normalize the foodName (lowercase, replace dashes with spaces)
  const normalizedFoodName = foodName.replace(/-/g, ' ').toLowerCase();

  // Find the food in the foodData
  const food = foodData.find(f => f.name.toLowerCase() === normalizedFoodName);

  if (!food) {
    return <p>Food not found</p>; // Handle case when food is not found
  }

  return (
    <div className="food-detail">
      <h2>{food.name}</h2>
      <p>Preparation: {food.preparation}</p>
      <p>Preference: {food.preference}</p>
      <p>Description: {food.description}</p> {/* Display the description */}
    </div>
  );
};

export default FoodDetailPage;
