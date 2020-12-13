import React from "react";
import { whippetsRacing } from "../../../../../media/whippets-racing2-min.jpg";
import { Link } from "react-router-dom";

function JoinDesc() {
  return (
    <div className="join-desc">
      <div className="container">
        <div className="lr-div">
          <div className="join-desc-image">
            <div className="frame">
              <Link to="/join">
                <div className="frame-image image1"></div>
              </Link>
            </div>
          </div>
          <div className="join-desc-text">
            <div className="join-desc-top">
              <div className="caption">
                <h2>Id occaecat proident </h2>
              </div>
              <div className="section-header">
                <h2>Tempor amet aute </h2>
              </div>
            </div>
            <div className="join-desc-description">
              <p>
                Commodo excepteur laborum in voluptate deserunt voluptate tempor
                minim qui eu officia ex.
              </p>
            </div>
            <div className="more-button">
              <Link to="/join">Show More</Link>
            </div>
          </div>
        </div>
        <div className="rl-div">
          <div className="join-desc-image">
            <div className="frame">
              <Link to="/join">
                <div className="frame-image image2"></div>
              </Link>
            </div>
          </div>
          <div className="join-desc-text">
            <div className="join-desc-top">
              <div className="caption">
                <h2>Id occaecat proident </h2>
              </div>
              <div className="section-header">
                <h2>Tempor amet aute </h2>
              </div>
            </div>
            <div className="join-desc-description">
              <p>
                Commodo excepteur laborum in voluptate deserunt voluptate tempor
                minim qui eu officia ex.
              </p>
            </div>
            <div className="more-button">
              <Link to="/join">Show More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinDesc;
