import React, { Fragment, useState } from "react";
import RequestActivity from "./RequestActivity";
import RequestActivityDetails from "./RequestActivityDetails";
import RequestClientDetails from "./RequestClientDetails";
import ThankyouPage from "./ThankyouPage";
import "./index.css";

const Questionaire = ({ data }) => {
    const [page, setPage] = useState(1);
    const [selectedObject, setSelectedObject] = useState();
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
            name: clientName,
            email: clientEmail
        };

        console.log(client);
        console.log("submission button");

        setClientName("");
        setClientEmail("");
    };

    const activities = data.activities;

    // console.log(activities);
    // console.log("activity", selectedObject);

    return (
        <Fragment>
            <div>
                <div className="heading-block"><h2>{data.eventName} </h2></div>
            </div>
            <div className="master-form">
                <form onSubmit={submissionHandler}>
                    {page === 1 && (<RequestActivity activities={activities} selectedObject={selectedObject} setSelectedObject={setSelectedObject} />)}
                    {/* The below "page" will need to be fully dynamic */}
                    {page === 2 && (<RequestActivityDetails selectedObject={selectedObject} setSelectedObject={setSelectedObject} />)}
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