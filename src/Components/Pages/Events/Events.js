import React, { useEffect, useState } from "react";
import { apiUrl } from "../../helpers/backend";
import ClubEvents from "../Main/Parts/ClubEvents/ClubEvents";

function Events() {
  const [events, setEvents] = useState([]);
  console.log(events);
  const fetchEvents = async () => {
    const getRequest = await fetch(`${apiUrl}/api/events`);

    const response = await getRequest.json();
    // console.log(response.events);
    const responseParsed = JSON.parse(response.events);
    console.log(responseParsed);
    setEvents([responseParsed]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="events">
      {events[0] !== undefined ? <ClubEvents events={events} /> : null}
    </div>
  );
}

export default Events;
