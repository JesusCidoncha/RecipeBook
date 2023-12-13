import { Link } from "react-router-dom";
import placeholderImage from "../assets/logo.webp";
import recipes from "../assets/recipes.json";

function RecipeCard({ id, name, calories, serving, image }) {
  return (
    <Link to={`/recipes/${id}`}>
      <div
        className={`StudentCard flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded border border-gray-200 hover:bg-gray-50 ${className}`}
      >
        <span
          className="flex items-center justify-center"
          style={{ flexBasis: "20%" }}
        >
          <img
            src={image || placeholderImage}
            alt={`${name}`}
            className="rounded-full w-10 h-10 object-cover border-2 border-gray-300"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = placeholderImage;
            }}
          />
        </span>
        <span style={{ flexBasis: "20%" }}>
          {name} {calories}
          {serving}
        </span>
      </div>
    </Link>
  );
}

export default RecipeCard;
