import React, { useState, useEffect } from "react";
import { SingleDatePicker } from 'react-dates';
import { ISODateConverter } from "../../../helpers/ISODateConverter";
import 'react-dates/lib/css/_datepicker.css';

import "./index.css";

const ActivityForm = ({ activityArray, setActivityArray }) => {
    const [activityName, setActivityName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [dateValue, setDateValue] = useState("");
    const [dateArray, setDateArray] = useState([]);
    const [contactName, setContactName] = useState("");
    const [contactPosition, setContactPosition] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [display, setDisplay] = useState(false);

    const [date, setDate] = useState();
    const [focus, setFocus] = useState(false);

    const activityNameHandler = (e) => {
        setActivityName(e.target.value);
    };

    const activityDescHandler = (e) => {
        setDescription(e.target.value)
    };

    const activityLocationHandler = (e) => {
        setLocation(e.target.value)
    };

    const activityImageHandler = (e) => {
        setImage(e.target.value);
    };

    // const activityDateHandler = () => {
    //     setDateValue({date: date?._d.toISOString(), votes: "0"})
    // };

    const addDateHandler = (e) => {
        e.preventDefault();
        if (dateValue === "" || dateValue === null) return null;
        setDateArray(date => [...date, dateValue]);
        setDateValue("");
    };

    const addContactDetailsHandler = (e) => {
        e.preventDefault();
        setDisplay(!display);
    }

    const addContactName = (e) => {
        setContactName(e.target.value);
    };

    const addContactPosition = (e) => {
        setContactPosition(e.target.value);
    };

    const addContactEmail = (e) => {
        setContactEmail(e.target.value);
    }

    const addContactPhone = (e) => {
        setContactPhone(e.target.value);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;
        const updatedDates = [...dateArray];
        updatedDates.splice(id, 1);
        // console.log(updatedDates);
        setDateArray(updatedDates);

    };



    const submitActivityData = (e) => {
        e.preventDefault();
        console.log("submit activity")

        const activity = {
            activity: activityName,
            location: location,
            description: description,
            votes: "0",
            image: image,
            dates: dateArray,
            contact: {
                    name: contactName,
                    position: contactPosition,
                    email: contactEmail,
                    phone: contactPhone
                }
        };

        setActivityArray(act => [...act, activity]);

        // console.log(activity);

        setActivityName("");
        setLocation("");
        setDescription("");
        setImage("");
        setDateArray([]);
        setContactName("");
        setContactPosition("");
        setContactEmail("");
        setContactPhone("");
        setDisplay(false);

    }

    useEffect(() => {
        let updatedDateFormatISO = date?._d.toISOString();
        setDateValue({date: updatedDateFormatISO, votes: "0"})
    },[date]);

    return (
        <form className="form-event__activity" onSubmit={submitActivityData}>
            <div className={`form-event__acitvity-details ${display ? "hidden" : "show"}`}>
                <div className="form-event__activity-name">
                    <input onChange={activityNameHandler} value={activityName} type="text" placeholder="Activity name" required />
                </div>
                <div className="form-event__activity-location">
                    <input onChange={activityLocationHandler} value={location} type="text" placeholder="Location" required />
                </div>
                <div className="form-event__activity-image">
                    <input onChange={activityImageHandler} value={image} type="url" placeholder="Image (paste image url)" />
                </div>
                <div className="form-event__activity-description">
                    <textarea onChange={activityDescHandler} value={description} type="text" placeholder="Description" rows="2" cols="50" required></textarea>
                </div>
                <div className="form-event__activity-dates">
                    <p className="form-event__label">Add available dates:</p>
                    <div className="date-option">
                        {/* <input type="date" value={dateValue.name} onChange={activityDateHandler} /> */}
                        
                        <SingleDatePicker
                            numberOfMonths={1}
                            date={date} // momentPropTypes.momentObj or null
                            onDateChange={date => setDate(date)} // PropTypes.func.isRequired
                            focused={focus} // PropTypes.bool
                            onFocusChange={() => setFocus(!focus)} // PropTypes.func.isRequired
                            id="activity-dates" // PropTypes.string.isRequired,

                        />
                        <button onClick={addDateHandler} className="date-option__cta">+</button>
                    
                    </div>
                    <div className="dates-listing">
                        <ul className="dates-list">
                            {dateArray.map((date, i) => {
                                const dateItem = date
                                return (<li key={i} className="dates-date" >{ISODateConverter(dateItem.date)} <span><button onClick={deleteHandler} data-id={i}>X</button></span></li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
                <button onClick={addContactDetailsHandler}>{display ? "Show activity details" : "Add contact details"}</button>
            <div className={`form-event__activity-contact ${display ? "show" : "hidden"}`} >
                <input onChange={addContactName} value={contactName} type="text" required placeholder="Contact fullname"/>
                <input onChange={addContactPosition} value={contactPosition} type="text" required placeholder="Contact position"/>
                <input onChange={addContactEmail} value={contactEmail} type="text" required placeholder="Contact email"/>
                <input onChange={addContactPhone} value={contactPhone} type="text" required placeholder="Contact phone"/>
            </div>

            <button type="submit" className="add-activity">Add activity</button>
        </form>
    );
};

export default ActivityForm;