import React, { useState } from "react";
import { Link } from "react-router-dom";

function List({ recipes, setRecipes }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const handleDelete = (currentId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== currentId));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchItem)
  );

  return (
    <div>
      <div>
        <input
          id="search"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>
      <div className="listCtn">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="container">
            <div className="imageCtn">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="textCtn">
              <h3>{recipe.name}</h3>
              <p>Calories: {recipe.calories}</p>
              <p>Servings: {recipe.servings}</p>
              <button
                className="button"
                type="button"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete
              </button>
              <Link to={`/edit/${recipe.id}`}>
                <button className="button" type="button">
                  Edit
                </button>
              </Link>
              <Link to={`/recipes/${recipe.id}`}>
                <button className="button" type="button">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
