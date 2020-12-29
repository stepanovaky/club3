import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegistrationModal from "../../../Events/Parts/RegistrationModal";
import { Button, Modal } from "semantic-ui-react";

function ClubEvents(props) {
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { dummyEvents, clubPage } = props;

  const [openEvent, setOpenEvent] = useState(false);

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
    if (one.mainPage === true) {
      return (
        <div key={index} className="events-div">
          <div className="events-list-item">
            <div className="frame events-frame">
              <div className={`events-frame-content `}>
                <div className={`events-text `}>
                  <div className={`events-text-top`}>
                    <h2 className="event-title">{one.name}</h2>
                    <h5 className="event-date-time">
                      {one.date}, <br /> {one.locationRollCallAndInspection}
                    </h5>
                    <p>{one.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const listEvents = dummyEvents.map((one, index) => {
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
        {listEvents}
      </div>
    </div>
  );
}

export default ClubEvents;
