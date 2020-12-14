import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

function MyCalendar() {
  const localizer = momentLocalizer(moment);

  const thing1 = new Date(2020, 11, 15, 15, 0, 0);
  const thing2 = new Date(2020, 11, 15, 17, 0, 0);

  const myEventsList = [{ title: "Event", start: thing1, end: thing2 }];
  return (
    <div className="calendar">
      <div className="container">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
