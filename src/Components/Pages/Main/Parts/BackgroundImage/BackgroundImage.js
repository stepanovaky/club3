import React from "react";
import LearnMoreButton from "../../../../Header/Parts/Buttons/LearnMoreButton";

function BackgroundImage() {
  return (
    <div className="background-image w100per">
      <div className="background-image-container">
        <div className="center-vertically-container">
          <div className="container">
            <div className="background-image-content">
              <h1 className="background-image-content-heading">
                Elit anim eu ex commodo id
              </h1>
              <p className="background-image-content-paragraph">
                Ex exercitation sint enim qui nostrud cupidatat ea excepteur
                veniam ipsum. Velit velit eiusmod cillum officia. Consectetur
                culpa adipisicing veniam eu consectetur ex non officia sit
                reprehenderit eiusmod tempor.
              </p>
              <LearnMoreButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundImage;
