import React, { Fragment } from "react";
import Header from "../components/Header";
import Main from "../components/Layout/Main";
import DashboardLayout from "../components/Account/DashboardLayout";

export default function Dashboard() {
    return (
        <Fragment>
            <Header />
            <Main>
                <DashboardLayout />
            </Main>
        </Fragment>
    );
}