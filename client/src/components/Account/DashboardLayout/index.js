import React, { Fragment, useState, useEffect } from "react";
import FormModal from "../FormModal";
import ActivityCard from "../../ActivityCard";
import "./index.css";

const DashboardLayout = () => {

    const [modal, setModal] = useState(false);
    const [activityArray, setActivityArray] = useState([]);
    const [apiData, setApiData] = useState([]);

    const openModal = () => {
        setModal(true)
    };

    const closeModal = () => {
        setModal(false);
        setActivityArray([]);
    }

    const getAllEvents = () => {
        fetch(`/event`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => setApiData(data));

    }

    useEffect(() => {
        const body = document.querySelector("body");
        body.style.overflow = modal ? "hidden" : "auto";
    }, [modal]);

    useEffect(() => {
        getAllEvents();
    },[])

    console.log(apiData)

    return (
        <Fragment>
            <div className="heading-block">
                <h2>Dashboard</h2>
                <p>Welcome to the dashboard</p>
            </div>
            <FormModal modal={modal} setModal={setModal} closeModalHandler={closeModal} activityArray={activityArray} setActivityArray={setActivityArray} onAllEvents={getAllEvents}/>

            
            <div className="activity-group">
                <div className="activity-group__container">
                    <div className="activity-group__panel-left">
                        <div className="activity-available">
                            <h3>Available events</h3>
                            {apiData.map((card, index) => {
                                return <ActivityCard key={index} occasion={card.eventName} activity={card.activities} />
                            })}
                        </div>
                        <div className="line-break"></div>
                        <div className="activity-create">
                            <button className="create-btn" onClick={openModal}>Create an event</button>
                        </div>
                    </div>
                    {/* <button onClick={getAllEvents}>click</button> */}
                    {/* <div className="activity-group__panel-right">Right</div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default DashboardLayout;