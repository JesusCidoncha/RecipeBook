import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipesData from "../assets/recipes.json"; // Adjust this import path as necessary
import "../styles/EditRecipe-module-style.css";

function EditRecipePage({ setRecipes }) {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const existingRecipe = recipesData.find((r) => r.id === recipeId);

  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");
  const [instructions, setInstructions] = useState("");

  useEffect(() => {
    if (existingRecipe) {
      setName(existingRecipe.name);
      setCalories(existingRecipe.calories);
      setImage(existingRecipe.image);
      setServings(existingRecipe.servings);
      setInstructions(existingRecipe.instructions);
    }
  }, [existingRecipe]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      id: recipeId,
      name,
      calories,
      image,
      servings,
      instructions,
    };

    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === recipeId ? updatedRecipe : recipe
      )
    );

    navigate("/");
  };
  return (
    <div className="editRecipeFormContainer">
      <div className="editRecipeForm">
        <h1>Edit Recipe</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Recipe Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Calories
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </label>
          <label>
            Image URL
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Servings
            <input
              type="number"
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </label>
          <label>
            Instructions
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </label>
          <button type="submit">Update Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default EditRecipePage;
