import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import foodData from './foodData';
import './CategoryPage.css';

// Import Material UI icons
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [sortedColumn, setSortedColumn] = useState(null);

  // Format category title
  const formatCategoryTitle = (category) => {
    return category
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const formattedCategoryName = formatCategoryTitle(categoryName);

  // Map category names to descriptions
  const categoryDescriptions = {
    fruits: "Generally low in calories and rich in vitamins...",
    vegetables: "Vegetables are packed with vitamins...",
    legumes: "Legumes are low in calories and a great source of fiber...",
    starchyvegetables: "Starch can be a great way to incorporate...",
    // other category descriptions here
  };

  const categoryDescription = categoryDescriptions[categoryName.toLowerCase()] || "Category description not available.";

  const foods = foodData.filter(food => food.category.toLowerCase() === categoryName.toLowerCase());
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (column) => {
    const isAscending = sortedColumn === column && sortOrder === 'asc';
    setSortOrder(isAscending ? 'desc' : 'asc');
    setSortedColumn(column);
  };

  const sortedFoods = [...filteredFoods];

  if (sortedColumn) {
    sortedFoods.sort((a, b) => {
      if (sortedColumn === 'preference') {
        const order = sortOrder === 'asc' ? 1 : -1;
        const preferenceOrder = { low: 1, medium: 2, high: 3 };
        return order * (preferenceOrder[a.preference.toLowerCase()] - preferenceOrder[b.preference.toLowerCase()]);
      } else {
        const order = sortOrder === 'asc' ? 1 : -1;
        return order * a[sortedColumn].localeCompare(b[sortedColumn]);
      }
    });
  }

  return (
    <div className="category-page">
      <h2>{formattedCategoryName}</h2>

      <div className="info-box-category">
        <p>{categoryDescription}</p>
      </div>

      <input
        type="text"
        placeholder="Find Food"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <table className="food-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>
              Food {sortedColumn === 'name' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            </th>
            <th onClick={() => handleSort('preparation')}>
              Preparation {sortedColumn === 'preparation' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            </th>
            <th onClick={() => handleSort('preference')}>
              Preference {sortedColumn === 'preference' && (sortOrder === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedFoods.map((food, index) => (
            <tr key={index}>
              <td><Link to={`/food/${food.name}`}>{food.name}</Link></td>
              <td>{food.preparation}</td>
              <td>{food.preference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryPage;
