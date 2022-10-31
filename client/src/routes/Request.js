import React, { Fragment, useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Layout/Main";
import EventsList from "../components/EventsList";

export default function Request () {
    const [reqData, setReqData] = useState([]);

   useEffect(() => {
    fetch(`/event`, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res?.json())
    .then(data => setReqData(data))
    .catch(err => console.log("error: ", err));

   },[]);

    return (
        <Fragment>
            <Header />
            <Main>
              <div className="heading-block">
                  <h1>Upcoming events</h1>
              </div>
               <EventsList events={reqData} />
            </Main>
        </Fragment>
    );
}