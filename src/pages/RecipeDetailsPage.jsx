import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json"; // Make sure this path is correct

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const recipe = recipesData.find((r) => r.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Instructions: {recipe.instructions}</p>
      {/* Add more details as necessary */}
    </div>
  );
}

export default RecipeDetailsPage;
