import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import recipesData from "../assets/recipes.json";

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

  if (!existingRecipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className="App pt-20">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <h3>Add a Recipe</h3>
        <div>
          <label>
            Recipe Name
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => {
                console.log(event.target.value);
                setName(event.target.value);
              }}
            />
          </label>

          <label>
            Image of the dish
            <input
              name="image"
              type="url"
              placeholder="Dish Image"
              value={image}
              onChange={(event) => {
                console.log(event.target.value);
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Calories
            <input
              name="phone"
              type="number"
              placeholder="Calories"
              value={calories}
              onChange={(event) => {
                console.log(event.target.value);
                setCalories(event.target.value);
              }}
            />
          </label>

          <label>
            Servings
            <input
              name="servings"
              type="number"
              placeholder="Servings"
              value={servings}
              onChange={(event) => {
                console.log(event.target.value);
                setServings(event.target.value);
              }}
            />
          </label>
          <label>
            Recipe Instructions
            <input
              name="intructions"
              type="text"
              placeholder="Instructions"
              value={instructions}
              onChange={(event) => {
                console.log(event.target.value);
                setInstructions(event.target.value);
              }}
            />
          </label>

          <button id="btn" type="submit">
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditRecipePage;
