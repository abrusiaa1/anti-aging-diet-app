/* 
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import foodData from './foodData';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  // Extract the query from the URL
  const query = new URLSearchParams(location.search).get('query').toLowerCase();

  useEffect(() => {
    // Filter food items based on the search query
    const results = foodData.filter(
      (food) =>
        food.name.toLowerCase().includes(query) ||
        food.preparation.toLowerCase().includes(query) ||
        food.category.toLowerCase().includes(query)
    );
    setSearchResults(results);
  }, [query]);

  return (
    <div className="search-results-page">
      <h2>Search Results for: "{query}"</h2>
      {searchResults.length > 0 ? (
        <table className="food-table">
          <thead>
            <tr>
              <th>Food</th>
              <th>Preparation</th>
              <th>Category</th>
              <th>Preference</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((food, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/food/${food.name.replace(/ /g, '-')}`}>{food.name}</Link>
                </td>
                <td>{food.preparation}</td>
                <td>{food.category}</td>
                <td className={`preference ${food.preference.toLowerCase()}`}>
                  {food.preference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No foods found for "{query}"</div>
      )}
    </div>
  );
};

export default SearchResultsPage;
 */



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import foodData from './foodData';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query').toLowerCase();

  // Filter foods based on the search query
  const filteredFoods = foodData.filter((food) =>
    food.name.toLowerCase().includes(query)
  );

  return (
    <div className="search-results-page">
      <h2>Search Results for: {query}</h2>
      {filteredFoods.length > 0 ? (
        <table className="food-table">
          <thead>
            <tr>
              <th>Food</th>
              <th>Preparation</th>
              <th>Preference</th>
            </tr>
          </thead>
          <tbody>
            {filteredFoods.map((food, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/food/${food.name.replace(/ /g, '-')}`}>
                    {food.name}
                  </Link>
                </td>
                <td>{food.preparation}</td>
                <td className={`preference ${food.preference.toLowerCase()}`}>
                  {food.preference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No foods found for your search.</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
