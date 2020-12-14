import React from "react";
import { Link } from "react-router-dom";
import whippet from "../../../../../media/whippets-racing-min.jpg";
import whippet1 from "../../../../../media/whippets-from-box-min.jpg";

function JoinDesc() {
  return (
    <div className="join-desc">
      <div className="container">
        <div className="lr-div">
          <div className="join-desc-image">
            <div className="frame join-dog-image ">
              <Link to="/join">
                <div className="frame-image fix-div-height-width1">
                  <img className="image1" src={whippet} alt="racing whippets" />
                </div>
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
            <div className="frame join-dog-image2">
              <Link to="/join">
                <div className="frame-image fix-div-height1">
                  <img
                    className="image2"
                    src={whippet1}
                    alt="racing whippets"
                  />
                </div>
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
