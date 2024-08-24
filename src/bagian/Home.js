// // import Layar from "../components/Layar";
// // import Navbar from "../components/Navbar";
// // import bg from "../asset/Logo_DIAM.jpeg"
// // import Division from "../components/Division";
// // import Product from "../components/Product";
// // import Footer from "../components/Footer";


// // function Home(){
// //     return(
// //         <>
// //         <Navbar/>
// //         <Layar
// //         cName="layar"
// //         layarIMG={bg}
// //         title="DIAM PORTFOLIO"
// //         text="Choose Your Favorite Destination"
// //         buttonText="DIAM PRODUCTION"
// //         url="/"
// //         btnClass="show"
// //         />
// //         <Division/>
// //         <Product/>
// //         <Footer/>
// //         </>
// //     );
// // }

// // export default Home;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 
// import Layar from "../components/Layar";
// import Navbar from "../components/Navbar";
// import bg from "../asset/Logo_DIAM.jpeg";
// import Division from "../components/Division";
// import Product from "../components/Product";
// import Footer from "../components/Footer";
// import styles from "./Home.module.css"; 

// function Home() {
//     const [showPopup, setShowPopup] = useState(true); 
//     const navigate = useNavigate(); 

//     const handleNavigate = (path) => {
//         setShowPopup(false); 
//         navigate(path); 
//     };

//     return (
//         <>
//             <Navbar disabled={showPopup} /> {/* Pass disabled prop to Navbar */}
//             {showPopup && (
//                 <div className={styles.popup}>
//                     <div className={styles.popupContent}>
//                         <h3>Do you have an account?</h3>
//                         <button onClick={() => handleNavigate('/login')}>I already have an account</button>
//                         <button onClick={() => handleNavigate('/')}>Go to Home</button>
//                         <button onClick={() => handleNavigate('/register')}>I don't have an account</button>
//                     </div>
//                 </div>
//             )}
//             <Layar
//                 cName="layar"
//                 layarIMG={bg}
//                 title="DIAM PORTFOLIO"
//                 text="Choose Your Favorite Destination"
//                 buttonText="DIAM PRODUCTION"
//                 url="/"
//                 btnClass="show"
//                 disabled={showPopup} 
//             />
//             <Division disabled={showPopup} /> 
//             <Product disabled={showPopup} /> 
//             <Footer disabled={showPopup} /> 
//         </>
//     );
// }

// export default Home;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layar from "../components/Layar";
import Navbar from "../components/Navbar";
import bg from "../asset/Logo_DIAM.jpeg";
import Division from "../components/Division";
import Product from "../components/Product";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

function Home() {
    const [showPopup, setShowPopup] = useState(true);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        setShowPopup(false);
        navigate(path);
    };

    return (
        <>
            <Navbar disabled={showPopup} />
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h3>Do you have an account?</h3>
                        <button onClick={() => handleNavigate('/login')}>I already have an account</button>
                        <button onClick={() => handleNavigate('/')}>Go to Home</button>
                        <button onClick={() => handleNavigate('/register')}>I don't have an account</button>
                    </div>
                </div>
            )}
            <Layar
                cName="layar"
                layarIMG={bg}
                title="DIAM PORTFOLIO"
                text="Choose Your Favorite Destination"
                buttonText="DIAM PRODUCTION"
                url="/"
                btnClass="show"
                disabled={showPopup}
            />
            <Division disabled={showPopup} />
            <Product disabled={showPopup} />
            <Footer disabled={showPopup} />
        </>
    );
}

export default Home;
