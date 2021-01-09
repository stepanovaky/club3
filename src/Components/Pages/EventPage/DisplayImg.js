import React from "react";

function DisplayImg(props) {
  //   console.log(props.imgUrl);
  return (
    <div className="display-image">
      {/* <img src={props.imgUrl} alt="event premium" /> */}
      <iframe
        src="https://docs.google.com/gview?url=https://firebasestorage.googleapis.com/v0/b/cfs-racing-club.appspot.com/o/Event%20V2%20Saturday.docx.pdf?alt=media&token=029b8367-dac5-4525-b5f6-70d9c7174ce3&embedded=true"
        style={{
          width: "100%",
          "min-height": "500px",
        }}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default DisplayImg;
