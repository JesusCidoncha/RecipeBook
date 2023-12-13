import { useState } from "react";

import recipesData from "../assets/recipes.json";
import List from "../components/List";

function DashboardPage() {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Your recipes are</h1>
      <div>
        <List />
      </div>
    </div>
  );
}

export default DashboardPage;
