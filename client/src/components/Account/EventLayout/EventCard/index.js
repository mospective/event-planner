import React, { useState, useEffect } from "react";
import "./index.css";

const EventCard = ({ activity, description, location, activityImage, chosenDate, contact, votes }) => {
    const [count, setCount] = useState(0);
    let duration = 1;
    let number = parseInt(votes);

    useEffect(() => {
        let startCount = 0;
        let endCount = number;

        if (startCount === endCount) return;

        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / endCount) * 1000;

        let timer = setInterval(() => {
            startCount += 1;
            setCount(startCount)
            if (startCount === endCount) clearInterval(timer)       
          }, incrementTime);


    },[number, duration]);

    const ISODateConverter = (isoDate) => {
        let date = new Date(isoDate);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
        dt = '0' + dt;
        }
        if (month < 10) {
        month = '0' + month;
        }
        return (`${dt} - ${month} - ${year}`)
    }

    return (
        <div className="event-card">
            <div className="event-card__content-wrapper">
                <div className="event-card__content">
                    <h4>{activity}</h4>
                    <p className="event-card__address">{location}</p>
                    <p>{description}</p>
                    <div className="contact">
                        <h5>Contact</h5>
                        <p>{contact.name}</p>
                        <p>{contact.position}</p>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                    </div>
                </div>
                <div className="event-card__content results">
                    <div className="results__numbers">
                        <div className="votes">
                            {count}
                        </div>
                        {/* <p>Total number of voters <span className="bold">{numberOfVoters}</span></p> */}
                    </div>
                    <div className="dates">
                        <p>Chosen date: {ISODateConverter(chosenDate)}</p>
                    </div>
                </div>
                <div className="event-card__content">
                    <img className="card-img" src={activityImage} alt={activity} />
                </div>
            </div>
        </div>
    );
};

export default EventCard;