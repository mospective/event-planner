import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const EventsList = ({ events }) => {
    const navigate = useNavigate();

    const activitiesPage = (e) => {
        const pageId = e.target.dataset.event;
        navigate(`/request/${pageId}`);
    };

    return (
        <section className="events-list">
            <div className="events-list__group">

                {events.map((event, id) => {
                    const bgImage =  `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(${event.activities[0].image})`;

                    return (
                        <div className="events-list__card" key={id} style={{backgroundImage: `${bgImage}`}}>
                            <div className="event-list__title">
                                <h2>{event.eventName}</h2>
                            </div>
                            <div className="event-list__content">
                                <p className="activities-number">Number of activities {event.activities.length}</p>
                                <p>Event ID: {event.id}</p>
                                <button onClick={activitiesPage} className="event-list__cta" data-event={event.id}>Select event</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    );

};

export default EventsList;