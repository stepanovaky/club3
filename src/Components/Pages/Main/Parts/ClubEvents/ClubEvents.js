import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegistrationModal from "../../../Events/Parts/RegistrationModal";
import { Button, Modal } from "semantic-ui-react";
import { format } from "date-fns";

function ClubEvents(props) {
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { events } = props;

  // console.log(events[0]);

  // const toggleOpen = () => {
  //   setOpenEvent(!openEvent);
  // };

  // const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  // const displayPDF = (one, clubPage) => {
  //   if (clubPage === "events" && one.pdfFile != null) {
  //     return (
  //       <div className="enlarge-image">
  //         <div className="container">
  //           <div
  //             onClick={() => dispatch({ type: "open", size: "fullscreen" })}
  //           ></div>
  //           <input
  //             className="view-pdf-fullscreen-button"
  //             type="button"
  //             value="View PDF Fullsize"
  //             onClick={() => dispatch({ type: "open", size: "fullscreen" })}
  //           />
  //           <div className="event-form-container">
  //             <div className="event-form-button"></div>
  //             <div
  //               className={`event-form-registration ${
  //                 openEvent === true ? "show-form" : "hide-form"
  //               }`}
  //             >
  //               <form onSubmit={handleSubmit(onSubmit)}>
  //                 <input
  //                   className="register-form"
  //                   type="text"
  //                   placeholder="Dog Sanction Number"
  //                   name="Dog Sanction Number"
  //                   ref={register}
  //                 />
  //                 <br />

  //                 <input className="register-submit" type="submit" />
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //         <div></div>
  //       </div>
  //     );
  //   }
  // };

  const displayEvent = (one, index) => {
    return (
      <div key={index} className="events-div">
        <div className="events-list-item">
          <Link to={`/eventpage/${one.eventId}`}>
            <div className="frame events-frame">
              <div className={`events-frame-content `}>
                <div className={`events-text `}>
                  <div className={`events-text-top`}>
                    <h2 className="event-title">{one.eventName}</h2>
                    <h5 className="event-date-time">
                      {format(new Date(one.startDate), "MMM Lo yyyy")}, <br />{" "}
                      {format(new Date(one.endDate), "MMM Lo yyyy")}
                    </h5>
                    <p>{one.eventAddress}</p> <br />
                    <p>{one.eventDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  const listEvents = events[0].map((one, index) => {
    return displayEvent(one, index);
  });

  return (
    <div className="club-events w100per">
      <div className="container">
        <div className="title-bundle">
          <div className="caption">
            <h2>Id occaecat proident </h2>
          </div>
          <div className="section-header">
            <h2>Tempor amet aute </h2>
          </div>
        </div>
        {events !== undefined ? listEvents : null}
      </div>
    </div>
  );
}

export default ClubEvents;
