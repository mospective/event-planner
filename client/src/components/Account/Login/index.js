import React, { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import loginPage from "../../../assets/login.jpg";
import "./index.css";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/dashboard");
        } catch(error) {
            setError("Failed to log in.");
            setLoading(false);
        }
        
    }

    return (
        <div className="login-page">
            <div className="login-page__group">
                <div className="login-page__pane login-panel">
                    <div className="login-panel__logo-area">
                        <h1 className="logo">The Organizer</h1>
                    </div>
                    {error && <div> {error} </div>}
                    <div className="login-panel__form">
                        <form onSubmit={handleSubmit}>
                            <h2 className="login-panel__title">Log into your account</h2>
                            <div className="field">
                                <label>Email</label>
                                <input type="text" ref={emailRef}/>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" ref={passwordRef} />
                            </div>
                            <button type="submit" className="submit-btn">Login</button>
                        </form>
                    </div>
                </div>
                <div className="login-page__pane image-fit">
                    <img src={loginPage} alt="event" />
                </div>
            </div>
        </div>
    );
};

export default Login;