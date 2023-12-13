import { Link } from "react-router-dom";
import "../styles/Notfound-module-style.css";

function NotFound() {
  return (
    <div className="notFoundCtn">
      <h2>ERROR 404 PAGE NOT FOUND</h2>
      <Link to="/">
        <button type="button" className="notFoundBtn">
          {" "}
          Back to Home Page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
