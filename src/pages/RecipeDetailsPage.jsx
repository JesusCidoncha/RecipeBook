import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json"; // Make sure this path is correct
import "../styles/RecipeDetails-module-style.css";

function RecipeDetailsPage() {
  const { recipeId } = useParams();
  const recipe = recipesData.find((r) => r.id === recipeId);

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="recipeDetailsContainer">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p className="detailHighlight">Calories: {recipe.calories}</p>
      <p className="detailHighlight">Servings: {recipe.servings}</p>
      <p>Instructions: {recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetailsPage;
