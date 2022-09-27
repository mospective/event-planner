import React from "react";
import { useNavigate } from "react-router-dom"; 
import loginPage from "../../../assets/login.jpg";
import "./index.css";

const Login = () => {
    const navigate = useNavigate();

    const submissionHandler = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className="login-page">
            <div className="login-page__group">
                <div className="login-page__pane login-panel">
                    <div className="login-panel__logo-area">
                        <h1 className="logo">The Organizer</h1>
                    </div>
                    <div className="login-panel__form">
                        <form onSubmit={submissionHandler}>
                            <h2 className="login-panel__title">Log into your account</h2>
                            <div className="field">
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                            <div className="field">
                                <label htmlFor="">Password</label>
                                <input type="password" />
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