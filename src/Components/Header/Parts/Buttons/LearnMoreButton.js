import React from "react";
import { Link } from "react-router-dom";

function LearnMoreButton() {
  return (
    <div className="learn-more-button-container">
      <Link to="/about">
        <input type="button" className="learn-more-button" value="Learn More" />
      </Link>
    </div>
  );
}

export default LearnMoreButton;
