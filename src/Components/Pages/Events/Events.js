import React from "react";
import ClubEvents from "../Main/Parts/ClubEvents/ClubEvents";

function Events(props) {
  return (
    <div className="events">
      <ClubEvents page="events" dummyEvents={props.dummyEvents} />
    </div>
  );
}

export default Events;
