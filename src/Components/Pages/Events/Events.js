import React from "react";
import ClubEvents from "../Main/Parts/ClubEvents/ClubEvents";

function Events(props) {
  return (
    <div className="events">
      <ClubEvents dummyEvents={props.dummyEvents} />
    </div>
  );
}

export default Events;
