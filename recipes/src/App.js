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

  //handle selected recipe data state
  const [recipeData, setRecipeData] = useState(null);

  //Handle the selected recipe category state
  const [recipeCategory, setRecipeCategory] = useState('all');
  function setCategoryFilter(category) {
    setRecipeCategory(category);
  }

  return (
    <div className="App">
      <Navigation setCategoryFilter={setCategoryFilter} />
      <Search />

      {/* Recipes Container */}
      <div className="row mt-2" id="container-recipes">
        {
          //filter recipes based on their category
          recipes.filter(recipe => {
            if (recipeCategory.toLowerCase() !== 'all') {
              return recipe.category.toLowerCase().includes(recipeCategory.toLowerCase())
            }
            //do not filter the 'all' category
            return true;

            //display the filtered recipes
          }).map(recipe => (
            <Recipe id={recipe.id} image={recipe.image} title={recipe.title} description={recipe.description}
              openModal={openModal} category={recipe.category} />
          ))
        }
      </div>

      {/* Recipes Modal */}
      <Modal isModalOpen={isModalOpen} closeModal={closemodal} recipeData={recipeData} />
    </div>
  );
}

export default App;
