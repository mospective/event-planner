import React, { useState, Fragment } from "react";
import "./index.css";

const RequestActivity = ({ activities, setSelectedObject, setClientActivity, setClientActivityId, selected, setSelected }) => {
    // const [selected, setSelected] = useState("");

    const btnSelectHandler = (e) => {
        e.preventDefault();
        let id = parseInt(e.target.dataset.cardId);
        let result = activities.find(obj => {
            // Returns the object where
            // the given property has some value 
            return obj.id === id;
        });

        setSelectedObject(result);
        setClientActivity(result.activity);
        setClientActivityId(result.id);
    };

    const btnChangehandler  = (e) => {
        setSelected(e.target.id)
    };

    return (
       <Fragment>
            <div className="message">
                <p>Select an activity of your choosing:</p>
            </div>
            <div className="client-card__grp">

                {activities && activities.map((activity, id) => {
                    let idString = id.toString();
                    return (
                        <div className="client-card" key={activity.id}>
                            <div className="client-card__img">
                                <img src={activity.image} alt={activity.activity} />
                            </div>
                            <div className="client-card__text">
                                <h2 className="client-card__title">{activity.activity}</h2>
                                <div className={`client-card__cta`}>
                                    <button className={selected === idString ? "selected" : ""} onClick={btnSelectHandler} onMouseDown={btnChangehandler} data-card-id={activity.id} id={id}>Select</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>     
       </Fragment>
    )
};

export default RequestActivity;