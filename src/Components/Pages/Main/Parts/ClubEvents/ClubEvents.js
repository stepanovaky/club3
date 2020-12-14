import React from "react";
import { dummyEvents } from "../../../../helpers/dummy-events";
import moment from "moment";

function ClubEvents() {
  //when server is built, there should be an API call
  //to the server to create the events list here

  const formattedDate = (date) => {
    moment(date).format("MMMM Do ddd");
  };

  const formattedTime = (time) => {
    moment(time).format("h:mA");
  };

  const displayEvent = (one, index) => {
    if (one.mainPage === true) {
      return (
        <div className="events-div">
          <div key={index} className="events-list-item">
            <div className="frame">
              <div className="events-frame-content">
                <div className="events-text">
                  <div className="events-text-top">
                    <h2 className="event-title">{one.name}</h2>
                    <h5 className="event-date-time">
                      {one.date}, {one.locationRollCallAndInspection}
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
    // <div className="events-div">
    //   <div key={index} className="events-list-item">
    //     <div className="frame">
    //       <div className="events-frame-content">
    //         <div className="events-text">
    //           <div className="events-text-top">
    //             <h2 className="event-title">{one.name}</h2>
    //             <h5 className="event-date-time">
    //               {formattedDate(one.date)}, {formattedTime(one.locationRollCallAndInspection)}
    //             </h5>
    //             <p>{one.eventDesc}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
