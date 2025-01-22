/* const foodData = [
  // Fruits
  { name: 'Apple', category: 'Fruits', preparation: 'Raw', preference: 'High' },
  { name: 'Banana', category: 'Fruits', preparation: 'Raw', preference: 'High' },

  // Vegetables
  { name: 'Carrot', category: 'Vegetables', preparation: 'Boiled', preference: 'Medium' },
  { name: 'Spinach', category: 'Vegetables', preparation: 'Steamed', preference: 'High' },

  // Legumes
  { name: 'Lentils', category: 'Legumes', preparation: 'Boiled', preference: 'High' },
  { name: 'Chickpeas', category: 'Legumes', preparation: 'Boiled', preference: 'High' },

  // Starchy Vegetables
  { name: 'Potato', category: 'StarchyVegetables', preparation: 'Mashed', preference: 'High' },
  { name: 'Sweet Potato', category: 'StarchyVegetables', preparation: 'Baked', preference: 'High' },

  // Chicken & Turkey
  { name: 'Chicken Breast', category: 'ChickenTurkey', preparation: 'Grilled', preference: 'High' },
  { name: 'Turkey Thigh', category: 'ChickenTurkey', preparation: 'Roasted', preference: 'Medium' },

  // Fats
  { name: 'Butter', category: 'MargarineButter', preparation: 'Spread', preference: 'High' },
  { name: 'Almonds', category: 'NutsSeeds', preparation: 'Raw', preference: 'High' },
  { name: 'Olive Oil', category: 'FatsLiquids', preparation: 'Drizzle', preference: 'High' },
  { name: 'Cashews', category: 'NutsSeeds', preparation: 'Roasted', preference: 'High' },
  { name: 'Sunflower Oil', category: 'FatsLiquids', preparation: 'Used for cooking', preference: 'Medium' }
];

export default foodData;
 */


const foodData = [
  // Fruits
  { name: 'Apple', category: 'fruits', preparation: 'Raw', preference: 'High', description: 'Their high fiber content and vitamins, especially polyphenols, contribute to cell regeneration and glowing skin.' },
  { name: 'Banana', category: 'fruits', preparation: 'Raw', preference: 'Medium' },
  { name: 'Ripe Banana', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Mango', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Pomegranates', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Pineapple', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Cantaloupe', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Lynchee', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Dates', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Peach', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Oranges', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Papaya', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Guava', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Persimmon', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Blueberries', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Cherries', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Cranberries', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Goji berries', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Strawberries', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Raspberries', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Jackfruit', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Tamarind', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Plums', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Figs', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Sapochilla (Chikoo)', category: 'fruits', preparation: 'Raw', preference: 'Low'},
  { name: 'Kiwi', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Avocado', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Coconut', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Watermelon', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Tomatoes', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Apricots', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Red Grapes', category: 'fruits', preparation: 'Raw', preference: 'High'},
  { name: 'Green Grapes', category: 'fruits', preparation: 'Raw', preference: 'Medium'},
  { name: 'Canned Fruits', category: 'fruits', preparation: 'Canned', preference: 'Low'},
  { name: 'Dried Fruits', category: 'fruits', preparation: 'Dried', preference: 'Low'},

  // Vegetables
  { name: 'Carrot', category: 'vegetables', preparation: 'Boiled', preference: 'Medium' },
  { name: 'Spinach', category: 'vegetables', preparation: 'Steamed', preference: 'High' },
  { name: 'Spinach', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Kale', category: 'vegetables', preparation: 'Steamed', preference: 'High' },
  { name: 'Kale', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Broccoli', category: 'vegetables', preparation: 'Steamed', preference: 'High' },
  { name: 'Broccoli', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Cauliflower', category: 'vegetables', preparation: 'Steamed', preference: 'High' },
  { name: 'Cauliflower', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Cabbage', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Cabbage', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Carrot', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Carrot', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Pumpkin', category: 'vegetables', preparation: 'Steemed', preference: 'High' },
  { name: 'Pumpkin', category: 'vegetables', preparation: 'Blended', preference: 'High' },
  { name: 'Pumpkin', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Pumpkin', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Asparagus', category: 'vegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Asparagus', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Asparagus', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Zucchini', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Zucchini', category: 'vegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Zucchini', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Celery', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Celery', category: 'vegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Zucchini', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Zucchini', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Beets', category: 'vegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Beets', category: 'vegetables', preparation: 'Pickled', preference: 'High' },
  { name: 'Radish', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Bell Pepper', category: 'vegetables', preparation: 'Raw', preference: 'High' },
  { name: 'Bell Pepper', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Eggplant', category: 'vegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Eggplant', category: 'vegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Hot Peppers', category: 'vegetables', preparation: 'Raw', preference: 'Low' },

  

  // Legumes
  { name: 'Lentils', category: 'legumes', preparation: 'Boiled', preference: 'High' },
  { name: 'Chickpeas', category: 'legumes', preparation: 'Boiled', preference: 'High' },

  // Starchy Vegetables
  { name: 'Potato', category: 'starchyvegetables', preparation: 'Mashed', preference: 'Medium' },
  { name: 'Potato', category: 'starchyvegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Potato', category: 'starchyvegetables', preparation: 'Cooked', preference: 'Medium' },
  { name: 'Potato', category: 'starchyvegetables', preparation: 'Fried', preference: 'Low' },
  { name: 'Sweet Potato', category: 'starchyvegetables', preparation: 'Cooked', preference: 'High' },
  { name: 'Sweet Potato', category: 'starchyvegetables', preparation: 'Baked', preference: 'Low' },
  { name: 'Sweet Potato', category: 'starchyvegetables', preparation: 'Fried', preference: 'Low' },
  { name: 'Corn', category: 'starchyvegetables', preparation: 'Cooked', preference: 'Medium' },
  { name: 'Corn', category: 'starchyvegetables', preparation: 'Canned', preference: 'Low' },

  // Chicken & Turkey
  { name: 'Chicken', category: 'chickenturkey', preparation: 'Grilled', preference: 'Low' },
  { name: 'Chicken', category: 'chickenturkey', preparation: 'Baked', preference: 'Low' },
  { name: 'Chicken', category: 'chickenturkey', preparation: 'Roasted', preference: 'Low' },
  { name: 'Chicken', category: 'chickenturkey', preparation: 'Cooked', preference: 'Mid' },

  { name: 'Turkey', category: 'chickenturkey', preparation: 'Grilled', preference: 'Low' },
  { name: 'Turkey', category: 'chickenturkey', preparation: 'Baked', preference: 'Low' },
  { name: 'Turkey', category: 'chickenturkey', preparation: 'Roasted', preference: 'Low' },
  { name: 'Turkey', category: 'chickenturkey', preparation: 'Cooked', preference: 'Mid' },

  // Beef
  { name: 'Ribeye Steak', category: 'beef', preparation: 'Grilled', preference: 'High' },
  { name: 'Ground Beef', category: 'beef', preparation: 'Fried', preference: 'Medium' },

  // Pork
  { name: 'Pork Chop', category: 'pork', preparation: 'Grilled', preference: 'Medium' },
  { name: 'Bacon', category: 'pork', preparation: 'Fried', preference: 'High' },

  // Fish
  { name: 'Salmon', category: 'fish', preparation: 'Grilled', preference: 'High' },
  { name: 'Tuna', category: 'fish', preparation: 'Raw', preference: 'Medium' },

  // Lamb
  { name: 'Lamb Chops', category: 'lamb', preparation: 'Grilled', preference: 'High' },
  { name: 'Roast Lamb', category: 'lamb', preparation: 'Roasted', preference: 'Medium' },

  // Veal
  { name: 'Veal Cutlet', category: 'veal', preparation: 'Pan-fried', preference: 'Medium' },
  { name: 'Veal Shank', category: 'veal', preparation: 'Braised', preference: 'High' }
];

export default foodData;
