// © 2024 gparap
import './App.css';
import Navigation from './components/Navigation';
import Recipe from './components/Recipe';
import Search from './components/Search';
import React, { useState, useEffect } from 'react';

function App() {
  //state for recipes data
  const [recipes, setRecipes] = useState([]);

  //fetch recipes data from an API using hooks
  useEffect(() => {
    const fetchRecipesData = async () => {
      fetch('<REPLACE-WITH-API>')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(recipesData => {
          setRecipes(recipesData.recipes);
        })
        .catch((reason) => {
          console.log(reason);
        });
    }
    fetchRecipesData();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Search />
      {/* Recipes Container */}
      <div className="row mt-2" id="container-recipes">
        {recipes.map(recipe => (
          <Recipe id={recipe.id} image={recipe.image} title={recipe.title} description={recipe.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
