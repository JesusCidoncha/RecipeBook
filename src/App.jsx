import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react"; // Import useState
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
import Form from "./components/Form";
import recipesData from "./assets/recipes.json";
import EditRecipePage from "./components/EditRecipeForm";
function App() {
  const [recipes, setRecipes] = useState(recipesData);
  return (
    <>
      <NavBar />
      <Sidebar />

      <Routes>
        <Route
          path="/"
          element={<DashboardPage recipes={recipes} setRecipes={setRecipes} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/edit/:recipeId"
          element={<EditRecipePage setRecipes={setRecipes} />}
        />
        <Route
          path="/edit/:recipeId"
          element={<EditRecipePage setRecipes={setRecipes} />}
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
