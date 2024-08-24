import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h2>Login</h2>
                <input
                    type="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className={styles.button} onClick={handleLogin}>
                    Login
                </button>
                <p className={styles.registerLink}>
                    Don't have an account? <NavLink to="/register">Register here</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Login;
