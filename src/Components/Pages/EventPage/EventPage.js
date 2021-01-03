import React, { useEffect, useState } from "react";
import DisplayImg from "./DisplayImg";
import RegisterForEvent from "./RegisterForEvent";
import { format } from "date-fns";
import { apiUrl } from "../../helpers/backend";

function EventPage(props) {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const getRequest = await fetch(`${apiUrl}/api/events`);

    const response = await getRequest.json();
    const responseParsed = JSON.parse(response.events);
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
            <h5>
              {event !== undefined
                ? format(new Date(event.startDate), "MMM do")
                : null}
            </h5>
          </div>
          <div>
            {event !== undefined ? (
              <RegisterForEvent id={event.eventId} />
            ) : null}
          </div>
          <div className="title-bundle">
            <h5>
              {event !== undefined ? (
                event.jpgUrl !== undefined ? (
                  <DisplayImg imgUrl={event.jpgUrl} />
                ) : (
                  "More Information Coming Soon!"
                )
              ) : null}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
