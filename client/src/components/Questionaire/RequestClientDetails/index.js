import React from "react";
import "./index.css";

const RequestClientDetails = ({ selectedObject, setSelectedObject, clientName, setClientName, clientEmail, setClientEmail }) => {

    console.log("rcd", selectedObject);

    const clientNameHandler = (e) => {
        setClientName(e.target.value);
    };

    const clientEmailHandler = (e) => {
        setClientEmail(e.target.value);
    };

    return (
        <div className="client-details">
            <h2>Your details</h2>
           <div className="client-details__name">
                <input type="text" value={clientName} onChange={clientNameHandler} placeholder="fullname" />
           </div>
           <div className="client-details__email">
                <input type="email" value={clientEmail} onChange={clientEmailHandler} placeholder="email" />
           </div>
        </div>
    )
};

export default RequestClientDetails;