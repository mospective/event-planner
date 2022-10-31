import React, { Fragment, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Main from "../components/Layout/Main";
import Questionaire from "../components/Questionaire";

export default function RequestForm () {
    const [reqData, setReqData] = useState([]);

    let { eventId } = useParams();

   useEffect(() => {
    fetch(`/event/${eventId}`, {
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

//    console.log(eventId);
//    console.log(reqData);

    return (
        <Fragment>
            <Header />
            <Main>
               <Questionaire data={reqData} />
            </Main>
        </Fragment>
    );
}