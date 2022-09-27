import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function slugify(string) {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}


const ActivityCard = ({ occasion, activity }) => {
    const navigate = useNavigate();

    const eventPage = () => {
        navigate(`/event/${slugify(occasion)}`, {state: {
            occasion, activity
        }});
    };

    let numberOfActivities = activity.length;

    const backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(${activity[0].image})`;

    return (
        <button onClick={eventPage} className="activity-card" style={{backgroundImage: backgroundImage}}>
            <div className="activity-card__container">
                <h4 className="activity-card__title">{occasion ? occasion : "Unkown activity"}</h4>
                {/* <p>Total number of voters: { numberOfVoters }</p> */}
                <p>Number of activities: { numberOfActivities } </p>
            </div>
        </button>
    );
};

export default ActivityCard;