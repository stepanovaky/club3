import React, { useState, useEffect } from "react";
import BackgroundImage from "../Parts/BackgroundImage/BackgroundImage";
import { apiUrl } from "../../../helpers/backend";
import Features from "../Parts/Features/Features";
import JoinDesc from "../Parts/JoinDesc/JoinDesc";
import SectionSeparator from "../Parts/SectionSeparator/SectionSeparator";
import OurDogs from "../Parts/OurDogs/OurDogs";

import ClubEvents from "../Parts/ClubEvents/ClubEvents";

function Main(props) {
  // const { events } = props;
  // console.log(events);
  // const eventsListLength = events[0].length;
  // // console.log(eventsListLength);
  // const mainList = [
  //   events[0][eventsListLength - 1],
  //   events[0][eventsListLength - 2],
  //   events[0][eventsListLength - 3],
  // ];

  // console.log(mainList);

  const [events, setEvents] = useState([]);
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
    <div className="main w100per">
      <BackgroundImage />
      <Features />
      <JoinDesc />
      <SectionSeparator />
      <OurDogs />
      <SectionSeparator />
      {events[0] !== undefined ? <ClubEvents events={events} /> : null}
    </div>
  );
}

export default Main;
