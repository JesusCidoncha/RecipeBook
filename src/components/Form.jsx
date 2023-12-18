import { useState } from "react";
import recipesData from "../assets/recipes.json";
import "../styles/Form-module-style.css";
import List from "../components/List";

function Form() {
  const [recipes, setRecipes] = useState(recipesData);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [servings, setServings] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
      instructions: instructions,
    };

    setRecipes([...recipes, newRecipe]);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
    setInstructions("");
  };

  return (
    <div className="App pt-20">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <h3>Add a Recipe</h3>
        <div id="div">
          <label>
            Recipe Name
            <input id="inp"
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
            <input id="inp"
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
            <input id="inp"
              name="phone"
              type="text"
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
            <input id="inp"
              name="servings"
              type="text"
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
            <input id="inp"
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

          <button id= "btn" type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
