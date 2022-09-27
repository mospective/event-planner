import React from "react";
import "./index.css";

const Main = ({ children }) => {
    return (
        <main className="main-container">
            <div className="inner-container">
                {children}
            </div>
        </main>
    );
};

export default Main;