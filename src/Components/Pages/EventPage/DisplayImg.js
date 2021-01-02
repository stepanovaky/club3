import React from "react";

function DisplayImg(props) {
  //   console.log(props.imgUrl);
  return (
    <div className="display-image">
      <img src={props.imgUrl} alt="event premium" />
    </div>
  );
}

export default DisplayImg;
