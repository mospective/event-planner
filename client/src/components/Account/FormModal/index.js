import React, { useState } from "react";
import Modal from "react-modal";
import ActivityForm from "./ActivityForm";
import "./index.css";

Modal.setAppElement("#root");

const FormModal = ({ modal, closeModalHandler, activityArray, setActivityArray, onAllEvents }) => {
    const [activityForm, setActivityForm] = useState(false);
    const [eventName, setEventName] = useState("");
    const [status, setStatus] = useState(false);


    const addActivityHandler = (e) => {
        e.preventDefault();
        setActivityForm(true);
    };

    const eventNameHandler = (e) => {
        setEventName(e.target.value);
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log("submit");

        if (!eventName || (!Array.isArray(activityArray) || !activityArray.length)) {
            setStatus(true);
            return;
        } else {
            setStatus(false);
        }

        const event = {
                eventName: eventName,
                activities: activityArray
        };

        fetch(`/event`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
        .then(res => res.json)
        .catch(err => console.log(err));

        setEventName("");
        setActivityArray([]);
        setActivityForm(false);
        onAllEvents();

    }

    return (
        <Modal
            isOpen={modal}
            closeTimeoutMS={200}
            overlayClassName="Overlay"
            className="Modal"
            contentLabel="Example Modal">
            <div className="modal-container">
                <div className="event-heading">
                    <h1>Create an event</h1>
                </div>
                {status && (<div className="error-messages">
                    <p>Error: Check if the event has name or at least one activity</p>
                </div>)}
                
                <div className="form-area">
                    <div className="two-column">
                        <div className="single-column">
                            <div className="form-event__title">
                                <input onChange={eventNameHandler} type="text" value={eventName} placeholder="Add event name" required />
                            </div>
                            {!activityForm && (<button onClick={addActivityHandler} className="form-event__cta">Create activity</button>)}
                            {activityForm && (<ActivityForm activityArray={activityArray} setActivityArray={setActivityArray} />)}
                        </div>
                        <div className="single-column">
                            <h2> {eventName ? (eventName) : "Event name"} </h2>
                            <div className="activities-list">
                                {activityArray.length !== 0 ? (<p>Activities</p>) : (<p>Activities will be displayed here for this event.</p>)}
                                <ul>
                                    {activityArray.map((activity, i) => {
                                        return <li key={i}>{activity.activity}</li>
                                    })}
                                </ul>
                            </div>
                            <button className="form-event__submit" onClick={submitFormHandler}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="event-footer">
                    <button className="Modal__close-button" onClick={closeModalHandler}>Close</button>
                </div>
            </div>
        </Modal>
    );
};

export default FormModal;