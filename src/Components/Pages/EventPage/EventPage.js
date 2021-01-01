import React, { useEffect, useState } from "react";
import { apiUrl } from "../../helpers/backend";

function EventPage(props) {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const getRequest = await fetch(`${apiUrl}/api/events`);

    const response = await getRequest.json();
    console.log(props.match.params.eventId);
    const responseParsed = JSON.parse(response.events);
    console.log(responseParsed);
    setEvents([responseParsed]);
  };

  const id = props.match.params.eventId;

  const event =
    events[0] !== undefined
      ? events[0].find((one) => id === one.eventId)
      : undefined;

  console.log(event);

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="event-page">
      <div className="container">
        <div className="frame">
          <div className="title-bundle">
            <div className="caption">
              <h2>{event !== undefined ? event.eventName : null}</h2>
            </div>
            <h5>{event !== undefined ? event.eventDescription : null}</h5>
          </div>
          {event !== undefined
            ? event.premium !== undefined
              ? event.premium
              : "Coming Soon"
            : null}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
