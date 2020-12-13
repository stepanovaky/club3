import React from "react";

function ClubEvents() {
  const events = [
    {
      eventName: "Lorem",
      eventTime: "7pm",
      eventDate: "21 March",
      eventDesc: "Aliquip Lorem officia culpa esse.",
    },
  ];

  //when server is built, there should be an API call
  //to the server to create the events list here

  const listEvents = events.map((one, index) => {
    return (
      <div className="events-div">
        <div key={index} className="events-list-item">
          <div className="frame">
            <div className="events-frame-content">
              <div className="events-text">
                <div className="events-text-top">
                  <h2 className="event-title">{one.eventName}</h2>
                  <h5 className="event-date-time">
                    {one.eventDate}, {one.eventTime}
                  </h5>
                  <p>{one.eventDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
