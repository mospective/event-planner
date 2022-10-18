import React, { useRef } from "react";
import RadioButton from "../../helpers/RadioButton";
import "./index.css";

const RequestActivityDetails = ({ selectedObject, setSelectedObject, setClientDate, setClientDateId }) => {
    const dateId = useRef();
    console.log("rad", selectedObject);
    const { image } = selectedObject;
    const { description } = selectedObject;
    const { activity } = selectedObject;
    const { dates } = selectedObject;

    // console.log(dates);

    const changeHandler = (e) => {
        // e.preventDefault();
        console.log("date" + e.target.value);
        console.log("id");
        console.log(e.currentTarget.dataset.id);

        // setValue(!value)
        setSelectedObject({...selectedObject, date: e.target.value});
        // console.log(selectedObject);
        setClientDate(e.target.value);
        // setSelectedObject((prev) => {
        //     return {
        //         prev,
        //         date: e.target.value
        //     }
        // });

        // based on date value return an array item with key
        // copy the dateId + vote + 1

    };


    return (
        <div className="activity-grp">
            <div className="activity-grp__details">
                <div className="activity-details__text">
                    <h3>{activity}</h3>
                    <p>{description}</p>
                </div>
                <div className="activity-details__image">
                    <img src={image} alt={activity} />
                </div>
            </div>
            <div className="activity-options">
                <div className="activity-options__dates">
                    <h3 className="activity-dates__heading">Choose a date</h3>
                    <ul className="activity-dates__list">

                        {dates.map(date => {
                            console.log(date)
                            return (
                                <li className="activity-dates__listitem" key={date.id}>
                                    <div className="radio-btn">
                                        <RadioButton label={date.date} dataId={date.id} onChange={changeHandler} />
                                    </div>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
};

export default RequestActivityDetails;