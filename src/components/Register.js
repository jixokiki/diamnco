// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"; 
// import { db } from "../firebase"; 
// import { useNavigate, NavLink } from "react-router-dom";
// import styles from "./Register.module.css";

// function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPopup, setShowPopup] = useState(true); // Show the popup initially
//     const navigate = useNavigate();

//     const handleRegister = async () => {
//         try {
//             // Register user with email and password
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;

//             // Save user data to Firestore
//             await setDoc(doc(db, "users", user.uid), {
//                 email: user.email,
//                 uid: user.uid
//             });

//             // Show the popup asking user what they want to do next
//             setShowPopup(true);
//         } catch (error) {
//             console.error("Error signing up: ", error);
//         }
//     };

//     const handleNavigate = (path) => {
//         setShowPopup(false);
//         navigate(path);
//     };

//     return (
//         <div className={styles.container}>
//             <div className={styles.formContainer}>
//                 {showPopup && (
//                     <div className={styles.popup}>
//                         <div className={styles.popupContent}>
//                             <h3>What would you like to do next?</h3>
//                             <button onClick={() => handleNavigate('/')}>Go to Home</button>
//                             <button onClick={() => setShowPopup(false)}>Continue to Register</button>
//                         </div>
//                     </div>
//                 )}

//                 <div className={styles.form}>
//                     <h2>Register</h2>
//                     <input
//                         type="email"
//                         className={styles.input}
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         disabled={showPopup} // Disable input if popup is visible
//                     />
//                     <input
//                         type="password"
//                         className={styles.input}
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         disabled={showPopup} // Disable input if popup is visible
//                     />
//                     <button 
//                         className={styles.button} 
//                         onClick={handleRegister}
//                         disabled={showPopup} // Disable button if popup is visible
//                     >
//                         Register
//                     </button>
//                     <p className={styles.loginLink}>
//                         {showPopup ? (
//                             <span className={styles.disabledLink}>Login here</span>
//                         ) : (
//                             <NavLink to="/login">Already have an account? Login here</NavLink>
//                         )}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Register;



import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase"; 
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(true); // Show the popup initially
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                uid: user.uid
            });
            setShowPopup(true);
        } catch (error) {
            console.error("Error signing up: ", error);
        }
    };

    const handleNavigate = (path) => {
        setShowPopup(false);
        navigate(path);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                {showPopup && (
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <h3>What would you like to do next?</h3>
                            <button onClick={() => handleNavigate('/')}>Go to Home</button>
                            <button onClick={() => setShowPopup(false)}>Continue to Register</button>
                        </div>
                    </div>
                )}
                <div className={styles.form}>
                    <h2>Register</h2>
                    <input
                        type="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        disabled={showPopup} // Disable input if popup is visible
                    />
                    <input
                        type="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        disabled={showPopup} // Disable input if popup is visible
                    />
                    <button 
                        className={styles.button} 
                        onClick={handleRegister}
                        disabled={showPopup} // Disable button if popup is visible
                    >
                        Register
                    </button>
                    <p className={styles.loginLink}>
                        {showPopup ? (
                            <span className={styles.disabledLink}>Login here</span>
                        ) : (
                            <NavLink to="/login">Already have an account? Login here</NavLink>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
