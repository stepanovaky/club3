import React from "react";
import BackgroundImage from "../Parts/BackgroundImage/BackgroundImage";
import Features from "../Parts/Features/Features";
import JoinDesc from "../Parts/JoinDesc/JoinDesc";
import SectionSeparator from "../Parts/SectionSeparator/SectionSeparator";
import OurDogs from "../Parts/OurDogs/OurDogs";
import ClubEvents from "../Parts/ClubEvents/ClubEvents";

function Main(props) {
  const { dummyEvents } = props;
  const eventsListLength = dummyEvents.length;
  const mainList = [
    dummyEvents[eventsListLength - 1],
    dummyEvents[eventsListLength - 2],
    dummyEvents[eventsListLength - 3],
  ];

  return (
    <div className="main w100per">
      <BackgroundImage />
      <Features />
      <JoinDesc />
      <SectionSeparator />
      <OurDogs />
      <SectionSeparator />
      {console.log(mainList.reverse())}
      <ClubEvents dummyEvents={mainList} />
    </div>
  );
}

export default Main;
