import React, { useState } from "react";
import recipesData from "../assets/recipes.json";
import List from "../components/List";
import Form from "../components/Form"; // Import Form component

function DashboardPage({ recipes, setRecipes }) {
  console.log("DashboardPage - recipes:", recipes);
  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Your recipes are</h1>
      <List recipes={recipes} setRecipes={setRecipes} />
      <Form setRecipes={setRecipes} />
    </div>
  );
}

export default DashboardPage;
