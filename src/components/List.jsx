import recipesData from "../assets/recipes.json";
import React, { useState } from "react";
import "../styles/List-module-style.css";
function List() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(recipesData);
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    console.log(e.target.value);
    setSearchItem(searchTerm);
    const filteredItems = recipesData.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  };
  const handleDelete = (currentId) => {
    setFilteredUsers(filteredUsers.filter((recipe) => recipe.id !== currentId));
  };
  return (
    <div>
      <div>
        <input id="search"
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
      </div>
      <div className="listCtn">
        {filteredUsers.map((recipe) => (
          <div key={recipe.id} className="container">
            <div className="imageCtn">
              <img src={recipe.image} alt="image" />
            </div>
            <div className="textCtn">
              <h3>{recipe.name}</h3>
              <p>Calories: {recipe.calories}</p>
              <p>Servings: {recipe.servings}</p>
              <button id="button"
                class="button"
                type="button"
                onClick={() => handleDelete(recipe.id)}
              >
                Delete 
              </button>
             

              <button id="button2"  type="button">
                Edit
              </button>
              {/* </Link>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default List;
