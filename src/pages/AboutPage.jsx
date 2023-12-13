import { Link } from "react-router-dom";

function About() {
  const aboutUs = {
    name1: "Hanna Farha",
    name2: "Jesús Cidoncha",
    email: "janed@example.com",
    role: "Lead Teacher",
  };

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-violet-500 m-2">
      <h1>User Profile Page</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {aboutUs && (
          <>
            <img
              src="#"
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <h1 className="text-2xl mt-4 font-bold absolute">
              {aboutUs.name1}
              {aboutUs.name2}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p className="text-left mb-2 pb-2">
                <strong>Email:</strong> {aboutUs.email}
              </p>
              <p className="text-left mb-2 pb-2">
                <strong>Role:</strong> {aboutUs.role}
              </p>
            </div>
          </>
        )}

        {/* Back button */}
        <Link to="/">
          <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
