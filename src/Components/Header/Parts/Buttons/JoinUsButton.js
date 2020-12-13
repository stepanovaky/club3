import React from "react";
import { Link } from "react-router-dom";

function JoinUsButton() {
  return (
    <div className="join-us-button-div">
      <Link to="/join">
        <input className="join-us-button" value="Join Us" />
      </Link>
    </div>
  );
}

export default JoinUsButton;
