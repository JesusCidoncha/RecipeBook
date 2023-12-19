import {Link, Navigate, useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json";
function RecipesCard() {
  const { recipeId } = useParams()
  const recipeProfile = recipesData.find(recipes => recipes.id === recipeId)
  if (!recipeProfile) {
    return <Navigate to='/' />}
 console.log(recipeProfile)
 return (
 
  <><img
  src={recipeProfile.image}
  alt='profile-photo'
  width="700" height="500"
  
/>
<h1 className='text-2xl mt-4 font-bold absolute'>
          {recipeProfile.name} 
        </h1>
        
        <h3 className='text-2xl mt-4 font-bold absolute'>Calories: 
          {recipeProfile.calories} 
        </h3>
        <h3 className='text-2xl mt-4 font-bold absolute'>
          {recipeProfile.instructions} 
        </h3>
        <Link to="/">
        <button>Back</button>
      </Link>
</>
)
  

//       >
//         <span
//           className="flex items-center justify-center"
//           style={{ flexBasis: "20%" }}
//         >
//           <img
//             src={image || placeholderImage}
//             alt={`${name}`}
//             className="rounded-full w-10 h-10 object-cover border-2 border-gray-300"
//             onError={({ currentTarget }) => {
//               currentTarget.onerror = null;
//               currentTarget.src = placeholderImage;
//             }}
//           />
//         </span>
//         <span style={{ flexBasis: "20%" }}>
//           {name} {calories}
//           {serving}
//         </span>
//       </div>
//     </Link>
//   );
// }
}
export default RecipesCard;
