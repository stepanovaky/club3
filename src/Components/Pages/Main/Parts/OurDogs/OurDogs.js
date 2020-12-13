import React from "react";

function OurDogs() {
  const dogsHelpers = [
    {
      img: "whippet2min",
      alt: "whippet",
      dogName: "Name",
      desc: "Aute ipsum culpa aliqua non amet.",
    },
    {
      img: "whippet3min",
      alt: "whippet",
      dogName: "Name",
      desc: "Aute ipsum culpa aliqua non amet.",
    },
  ];

  const listDogs = dogsHelpers.map((dog, index) => {
    return (
      <div key={index} className="dog-single">
        <div className="dog-top">
          <div className="frame">
            <div className={`frame-image image3 ${dog.img}`}></div>
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
