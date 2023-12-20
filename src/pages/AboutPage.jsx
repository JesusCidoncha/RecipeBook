import { Link } from "react-router-dom";
import "../styles/About-module-style.css";

function About() {
  const aboutUs = {
    name1: "Hanna Farha",
    name2: "Jesús Cidoncha",
    email1: "johnnyfarha1@gmail.com",
    email2: "jesus.cidoncha.berlanga@gmail.com",
  };

  return (
    <div className="StudentDetailsPage">
      <h1>User Profile Page</h1>
      <div className="profileCard">
        <img src="#" alt="profile-photo" className="profileImage" />
        <h1 className="profileName">{aboutUs.name1}</h1>
        <img src="#" alt="profile-photo" className="profileImage" />
        <h1 className="profileName">{aboutUs.name2}</h1>

        <div className="profileDetails">
          <p>
            <strong>Emails:</strong> {aboutUs.email1}
          </p>
          <p>{aboutUs.email2}</p>
        </div>

        <Link to="/">
          <button className="backButton">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
