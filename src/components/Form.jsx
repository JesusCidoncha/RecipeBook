import React, { useState } from "react";
import uuid4 from "uuid4";

import { useNavigate } from "react-router-dom"; // Import useHistory
function Form({ setRecipes }) {
  const navigate = useNavigate(); // Initialize useHistory
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const newRecipe = {
      id: uuid4(),
      name,
      calories,
      image,
      servings,
      instructions,
    };
    console.log("click");
    // Correctly using the previous state for updating
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);

    console.log(newRecipe);
    // Reset form fields
    setName("");
    setCalories("");
    setImage("");
    setServings("");
    setInstructions("");
    navigate("/");
  };

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

export default Form;
