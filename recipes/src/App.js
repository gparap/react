// © 2024 gparap
import './App.css';
import Navigation from './components/Navigation';
import Search from './components/Search';
import React, { useState, useEffect } from 'react';

function App() {
  //state for recipes data
  const [recipes, setRecipes] = useState([]);

  //fetch recipes data from an API using hooks
  useEffect(() => {
    const fetchRecipesData = async () => {
      fetch('<REPLACE-WITH-API>'
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(recipesData => {
          setRecipes(recipesData);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    fetchRecipesData();
  }, []);

  //log recipes data to console
  console.log('Fetched Recipes:', recipes);

  return (
    <div className="App">
      <Navigation />
      <Search />
    </div>
  );
}

export default App;
