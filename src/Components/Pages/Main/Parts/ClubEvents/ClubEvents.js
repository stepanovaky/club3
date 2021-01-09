import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegistrationModal from "../../../Events/Parts/RegistrationModal";
import { Button, Modal } from "semantic-ui-react";
import { format, addDays } from "date-fns";

function ClubEvents(props) {
  //when server is built, there should be an API call
  //to the server to create the events list here
  const { events } = props;

  // console.log(events[0]);
  // console.log(new Date(events[0][0].startDate).getTime());

  const bubbleSort = (arr) => {
    let temp;
    // console.log(new Date(arr[0].startDate).getTime());
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (
          new Date(arr[j].startDate).getTime() >
          new Date(arr[j + 1].startDate).getTime()
        ) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  bubbleSort(events[0]);

  const today = new Date();

  const passed = [];

  const passedDate = (arr) => {
    arr.filter((item) => {
      if (new Date(item.startDate).getTime() < addDays(today.getTime(), -1)) {
      } else {
        console.log("there");
        passed.push(item);
      }
    });
  };

  passedDate(events[0]);

  console.log(passed);

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
                      {format(
                        addDays(new Date(one.startDate), 1),
                        "MMM do yyyy"
                      )}{" "}
                      <br />{" "}
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

  const listEvents = passed.map((one, index) => {
    return displayEvent(one, index);
  });

  return (
    <div className="club-events w100per">
      <div className="container">
        <div className="title-bundle"></div>
        {events !== undefined ? listEvents : null}
      </div>
    </div>
  );
}

export default ClubEvents;
