// import "./Product.css";
// import { NavLink } from "react-router-dom";
// function ProductData(props){
//     return(
//         <div className="p-card">
//             <div className="product-image">
//                 <img src={props.image} alt="image"/>
//             </div>
//             <h4>{props.heading}</h4>
//             <p>{props.text}</p>
//             <nav>
//                 <NavLink exact="true" activeclassname="active" className="photoshoot-link" to="/photoshoot">
//                     <button>Clicked Here</button>
//                 </NavLink>
//             </nav>            
//         </div>

//     );
// }

// export default ProductData;

import "./Product.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth";

function ProductData(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is authenticated, navigate to photoshoot
                navigate("/photoshoot");
            } else {
                // User is not authenticated, navigate to register
                navigate("/register");
            }
        });
    };

    return (
        <div className="p-card">
            <div className="product-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <nav>
                <button onClick={handleClick} className="photoshoot-link">Clicked Here</button>
            </nav>            
        </div>
    );
}

export default ProductData;
