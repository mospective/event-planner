import React, { Fragment, useState, useEffect } from "react";
import FormModal from "../FormModal";
import ActivityCard from "../../ActivityCard";
// import Restaurant from "../../../assets/table.jpg";
// import Paintball from "../../../assets/paintball.jpg";
import "./index.css";


// Example data
// const item = [
//     {
//         id: 1,
//         occasion: "Summer day out 2022",
//         activity: [
//             {
//                 activityId: 1,
//                 activity: "Paintball ",
//                 location: "London",
//                 totalVotes: 8,
//                 image: `${Paintball}`,
//                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//                 contact: {
//                     name: "Jane Smith",
//                     position: "Event organiser",
//                     email: "j.doe@pb.com",
//                     phone: "074589612554"
//                 },
//                 dates: [
//                     {
//                         dateId: 1,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 24
//                     },
//                     {
//                         dateId: 2,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 15
//                     },
//                     {
//                         dateId: 3,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 2
//                     }
//                 ]
//             },
//             {
//                 activityId: 2,
//                 activity: "Go karting ",
//                 location: "London",
//                 totalVotes: 25,
//                 image: `${Paintball}`,
//                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//                 contact: {
//                     name: "Jane Smith",
//                     position: "Event organiser",
//                     email: "j.doe@pb.com",
//                     phone: "074589612554"
//                 },
//                 dates: [
//                     {
//                         dateId: 1,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 24
//                     },
//                     {
//                         dateId: 2,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 15
//                     },
//                     {
//                         dateId: 3,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 2
//                     }
//                 ]
//             },

//         ],
//         eventImage: `${Paintball}`,
//         voters: 60
//     },
//     {
//         id: 2,
//         occasion: "Winter dinner",
//         activity: [
//             {
//                 activityId: 1,
//                 activity: "Honest ",
//                 location: "London",
//                 totalVotes: 12,
//                 image: `${Restaurant}`,
//                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//                 contact: {
//                     name: "Jane Doe",
//                     position: "Event organiser",
//                     email: "j.doe@pb.com",
//                     phone: "074589612554"
//                 },
//                 dates: [
//                     {
//                         dateId: 1,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 5
//                     },
//                     {
//                         dateId: 2,
//                         date: "2022-09-03T16:52:22.243Z",
//                         votes: 15
//                     },
//                     {
//                         dateId: 3,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 2
//                     }
//                 ]
//             },
//             {
//                 activityId: 2,
//                 activity: "Nandos",
//                 location: "London",
//                 totalVotes: 27,
//                 image: `${Restaurant}`,
//                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//                 contact: {
//                     name: "Jane Doe",
//                     position: "Event organiser",
//                     email: "j.doe@pb.com",
//                     phone: "074589612554"
//                 },
//                 dates: [
//                     {
//                         dateId: 1,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 6
//                     },
//                     {
//                         dateId: 2,
//                         date: "2022-10-03T16:52:22.243Z",
//                         votes: 15
//                     },
//                     {
//                         dateId: 3,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 4
//                     }
//                 ]
//             },
//             {
//                 activityId: 3,
//                 activity: "Pasta Evangelist",
//                 location: "London",
//                 totalVotes: 24,
//                 image: `${Restaurant}`,
//                 description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//                 contact: {
//                     name: "Jane Doe",
//                     position: "Event organiser",
//                     email: "j.doe@pb.com",
//                     phone: "074589612554"
//                 },
//                 dates: [
//                     {
//                         dateId: 1,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 5
//                     },
//                     {
//                         dateId: 2,
//                         date: "2022-10-03T16:52:22.243Z",
//                         votes: 16
//                     },
//                     {
//                         dateId: 3,
//                         date: "2022-08-03T16:52:22.243Z",
//                         votes: 2
//                     }
//                 ]
//             },

//         ],
//         eventImage: `${Restaurant}`,
//         voters: 25
//     },
// ];

const DashboardLayout = () => {

    const [modal, setModal] = useState(false);
    const [activityArray, setActivityArray] = useState([]);
    const [apiData, setApiData] = useState([]);

    const openModal = () => {
        setModal(true)
    };

    // const afterOpenModal = () => {

    // };

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
                            {/* {item.map((card, index) => {
                               return <ActivityCard key={index} occasion={card.occasion} activity={card.activity} eventImage={card.eventImage} numberOfVoters={card.voters}/>
                            })} */}

                            {apiData.map((card, index) => {
                                return <ActivityCard key={index} occasion={card.eventName} activity={card.activities} />
                            })}
                        </div>
                        <div className="line-break"></div>
                        <div className="activity-create">
                            <button className="create-btn" onClick={openModal}>Create an event</button>
                        </div>
                    </div>
                    <button onClick={getAllEvents}>click</button>
                    {/* <div className="activity-group__panel-right">Right</div> */}
                </div>
            </div>
        </Fragment>
    );
};

export default DashboardLayout;