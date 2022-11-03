import React, { Fragment } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import EventCard from "./EventCard";
import "./index.css";

const EventLayout = () => {
    const location = useLocation();
    let navigate = useNavigate();
    let occasion = location.state.occasion;
    let activities = location.state.activity;

    const backHandler = () => {
        navigate(-1);
    }

    return (
        <Fragment>
            <div className="heading-block">
                <h2>{occasion}</h2>
            </div>
            <div className="event">
                <h3 className="event__title">Activities</h3>

                {activities.map(activity => {
                   
                    let maxvotes =  activity.dates.reduce((max, act) => max.votes > act.votes ? max : act, 0);                

                    return <EventCard
                        key={activity.activityId}
                        activity={activity.activity}
                        description={activity.description}
                        location={activity.location}
                        activityImage={activity.image}
                        votes={activity.votes}
                        chosenDate={maxvotes !== 0 ? maxvotes.date : 0}
                        contact={activity.contact}
                    />
                })}
            </div>
            <button className="back-btn" onClick={backHandler}>Back</button>
        </Fragment>
    );
};

export default EventLayout;