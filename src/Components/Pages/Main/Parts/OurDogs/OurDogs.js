import React from "react";
import whippet1 from "../../../../../media/whippet2min.jpg";
import whippet2 from "../../../../../media/whippet3min.jpg";

function OurDogs() {
  const dogsHelpers = [
    {
      img: whippet1,
      alt: "whippet",
      dogName: "Name1",
      desc: "Aute ipsum culpa aliqua non amet.",
    },
    {
      img: whippet2,
      alt: "whippet",
      dogName: "Name2",
      desc: "Aute ipsum culpa aliqua non amet.",
    },
  ];

  const listDogs = dogsHelpers.map((dog, index) => {
    return (
      <div key={index} className="dog-single">
        <div className="dog-top">
          <div className="frame our-dog-frame">
            <div className={`frame-image our-dog-div`}>
              <img className="our-dog-image" src={dog.img} alt={dog.alt} />
            </div>
          </div>
        </div>
        <div className="dog-title">
          <h2 className="dog-name">{dog.dogName}</h2>
        </div>
        <p>{dog.desc}</p>
      </div>
    );
  });
  return (
    <div className="our-dogs w100per">
      <div className="container">
        <div className="title-bundle">
          <div className="caption text-center">
            <h2>Contestants</h2>
          </div>
          <div className="section-header text-center">
            <h2>Our Dogs</h2>
          </div>
        </div>
        <div className="dogs-wrapper">
          <div className="div-item">{listDogs}</div>
        </div>
      </div>
    </div>
  );
}

export default OurDogs;
