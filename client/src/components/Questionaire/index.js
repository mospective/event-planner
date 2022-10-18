import React, { Fragment, useState } from "react";
import RequestActivity from "./RequestActivity";
import RequestActivityDetails from "./RequestActivityDetails";
import RequestClientDetails from "./RequestClientDetails";
import ThankyouPage from "./ThankyouPage";
import "./index.css";

const Questionaire = ({ data }) => {
    const [page, setPage] = useState(1);
    const [selectedObject, setSelectedObject] = useState();
    const [clientActivity, setClientActivity] = useState("");
    const [clientActivityId, setClientActivityId] = useState("");
    const [clientDate, setClientDate] = useState("");
    const [clientDateId, setClientDateId] = useState("");
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");

    const backHandler = (e) => {
        e.preventDefault();
        setPage(page - 1);
    }

    const nextHandler = (e) => {
        e.preventDefault();
        setPage(page + 1);
    }

    // console.log(data)
    const submissionHandler = (e) => {
        e.preventDefault();
        const client = {
            event: data.eventName,
            eventId: data.id,
            activity: clientActivity,
            activityId: clientActivityId,
            activityDate: clientDate,
            name: clientName,
            email: clientEmail
        };

        console.log(client);
        console.log("submission button");

        fetch(`/response`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })
            .then(res => res.json)
            .catch(err => console.log(err));

        setClientName("");
        setClientEmail("");
    };

    const activities = data.activities;

    // console.log(data);
    // console.log("activity", selectedObject);

    return (
        <Fragment>
            <div>
                <div className="heading-block"><h2>{data.eventName} </h2></div>
            </div>
            <div className="master-form">
                <form onSubmit={submissionHandler}>
                    {page === 1 && (<RequestActivity activities={activities} selectedObject={selectedObject} setSelectedObject={setSelectedObject} setClientActivity={setClientActivity} setClientActivityId={setClientActivityId} />)}
                    {/* The below "page" will need to be fully dynamic */}
                    {page === 2 && (<RequestActivityDetails selectedObject={selectedObject} setSelectedObject={setSelectedObject} setClientDate={setClientDate} setClientDateId={setClientDateId} />)}
                    {page === 3 && (<RequestClientDetails selectedObject={selectedObject} setSelectedObject={setSelectedObject} clientName={clientName} setClientName={setClientName} clientEmail={clientEmail} setClientEmail={setClientEmail} />)}
                    <div className="form-navigation">
                        {page > 1 && (<button onClick={backHandler} >Back</button>)}
                        {/* <p>page: {page}</p> */}
                        {page < 3 && (<button onClick={nextHandler}>Next</button>)}
                        {page === 3 && (<button type="submit">Submit</button>)}
                    </div>

                </form>
            </div>
        </Fragment>
    )
};

export default Questionaire;