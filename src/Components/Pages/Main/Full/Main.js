import React from "react";
import BackgroundImage from "../Parts/BackgroundImage/BackgroundImage";
import Features from "../Parts/Features/Features";
import JoinDesc from "../Parts/JoinDesc/JoinDesc";
import SectionSeparator from "../Parts/SectionSeparator/SectionSeparator";
import OurDogs from "../Parts/OurDogs/OurDogs";
import ClubEvents from "../Parts/ClubEvents/ClubEvents";

function Main() {
  return (
    <div className="main w100per">
      <BackgroundImage />
      <Features />
      <JoinDesc />
      <SectionSeparator />
      <OurDogs />
      <SectionSeparator />
      <ClubEvents />
    </div>
  );
}

export default Main;
