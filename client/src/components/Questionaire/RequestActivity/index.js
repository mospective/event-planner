import React, { Fragment } from "react";
import "./index.css";

const RequestActivity = ({ activities, setSelectedObject, setClientActivity, setClientActivityId }) => {
    
    const btnSelectHandler = (e) => {
        e.preventDefault();
        // console.log("Select btn was click");
        // console.log(e.target.dataset.cardId);
        let id = parseInt(e.target.dataset.cardId);
        // debugger;
        let result = activities.find(obj => {
            // Returns the object where
            // the given property has some value 
            return obj.id === id;
        });

        // console.log(result);
        setSelectedObject(result);
        setClientActivity(result.activity);
        setClientActivityId(result.id);
    };

    // console.log("ra", selectedObject);

    return (
       <Fragment>
            <div className="message">
                <p>Select an activity of your choosing:</p>
            </div>
            <div className="client-card__grp">

                {activities && activities.map(activity => {
                    return (
                        <div className="client-card" key={activity.id}>
                            <div className="client-card__img">
                                <img src={activity.image} alt={activity.activity} />
                            </div>
                            <div className="client-card__text">
                                <h2 className="client-card__title">{activity.activity}</h2>
                                <div className="client-card__cta">
                                    <button onClick={btnSelectHandler} data-card-id={activity.id}>Select</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="activity-card">
                    <div className="activity-card__img">
                        <img src={img} alt="" />
                    </div>
                    <div className="activity-card__text">
                        <h2>Activity name</h2>
                        <div className="activity-card__cta">
                            <button>Select</button>
                        </div>
                    </div>
                </div> */}

            </div>
            
       </Fragment>
    )
};

export default RequestActivity;