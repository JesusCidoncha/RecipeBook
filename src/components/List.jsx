import recipesData from "../assets/recipes.json";
import React, { useState } from "react";
import "../styles/List-module-style.css";
function List() {
  const [recipes, setRecipes] = useState(recipesData);

  const handleDelete = (currentId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== currentId));
  };

  return (
    <div className="listCtn">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="container">
          <div className="imageCtn">
            <img src={recipe.image} alt="image" />
          </div>
          <div className="textCtn">
            <h3>{recipe.name}</h3>
            <p>{recipe.calories}</p>
            <p>{recipe.servings}</p>
            <button type="button" onClick={() => handleDelete(recipe.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
