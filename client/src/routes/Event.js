import React, { Fragment } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Main from "../components/Layout/Main";
import EventLayout from "../components/Account/EventLayout";

const Event = () => {
    let { eventId } = useParams();

    return (
        <Fragment>
            <Header />
            <Main>
                <EventLayout />
                <p>Current page: { eventId }</p>
            </Main>
        </Fragment>
    );
};

export default Event;