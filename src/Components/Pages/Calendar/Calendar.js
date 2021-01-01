import React, { useState, useEffect } from "react";
import { apiUrl } from "../../helpers/backend";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyCalendar(props) {
  const localizer = momentLocalizer(moment);

  const thing1 = new Date(2021, 0, 15, 15, 0, 0);
  const thing2 = new Date(2021, 0, 15, 17, 0, 0);

  // const myEventsList = [{ title: "Event", start: thing1, end: thing2 }];

  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const getRequest = await fetch(`${apiUrl}/api/events`);

    const response = await getRequest.json();
    const responseParsed = JSON.parse(response.events);
    console.log(responseParsed);
    setEvents([responseParsed]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const mapEvents =
    events[0] !== undefined
      ? events[0].map((one) => {
          return {
            title: one.name,
            start: one.startDate,
            end: one.endDate,
          };
        })
      : null;

  console.log(mapEvents);

  const myEventsList = events[0] !== undefined ? mapEvents : null;

  return (
    <div className="calendar">
      <div className="container">
        {events[0] !== undefined ? (
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default MyCalendar;
