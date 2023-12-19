import React from "react";
import List from "../components/List";
import Form from "../components/Form";

function DashboardPage({ recipes, setRecipes }) {
  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Your recipes are</h1>
      <List recipes={recipes} setRecipes={setRecipes} />
      <Form setRecipes={setRecipes} />
    </div>
  );
}

export default DashboardPage;
