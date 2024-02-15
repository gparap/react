// © 2024 gparap
import './App.css';
import Navigation from './components/Navigation';
import Recipe from './components/Recipe';
import Search from './components/Search';
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';

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

  //Handle the recipes modal state
  const [isModalOpen, setModalOpen] = useState(false);
  function openModal(recipeId) {
    setModalOpen(true);

    //set the recipe data by the selected id
    for (let i = 0; i < recipes.length; i++) {
      if (recipeId === recipes[i].id) {
        setRecipeData(recipes[i]);
        break;
      }
    }
  }
  function closemodal() {
    setModalOpen(false);
    setRecipeData(null);
  }

  //Handle selected recipe data state
  const [recipeData, setRecipeData] = useState(null);

  return (
    <div className="App">
      <Navigation />
      <Search />
      {/* Recipes Container */}
      <div className="row mt-2" id="container-recipes">
        {recipes.map(recipe => (
          <Recipe id={recipe.id} image={recipe.image} title={recipe.title} description={recipe.description}
            openModal={openModal} />
        ))}
      </div>
      {/* Recipes Modal */}
      <Modal isModalOpen={isModalOpen} closeModal={closemodal} recipeData={recipeData} />
    </div>
  );
}

export default App;
