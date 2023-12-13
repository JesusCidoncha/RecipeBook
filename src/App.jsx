import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RecipeCard from "./pages/RecipeDetailsPage";
import About from "./pages/AboutPage";
import NotFound from "./pages/NotFoundPage";
function App() {
  return (
    <>
      <NavBar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/recipes/:recipeId" element={<RecipeCard />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
