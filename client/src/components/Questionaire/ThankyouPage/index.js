import React from "react";
import "./index.css";

const ThankyouPage = () => {
    return (
        <div className="submission-message">
            <h2>Thank you for your submission.</h2>
            <p>Look forward to upcoming event!</p>
            <a className="link-btn" href="/request">View all events</a>
        </div>
    )
};

export default ThankyouPage;