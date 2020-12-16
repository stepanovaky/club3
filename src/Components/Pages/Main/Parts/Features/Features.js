import React from "react";
import { featureList } from "../../../../helpers/lists-helpers";
import { IconContext } from "react-icons";

function Features() {
  const renderFeatures = featureList.map((feature, index) => {
    return (
      <div key={index} className="feature-container">
        <div className="feature-icon">
          <IconContext.Provider value={{ size: "3em" }}>
            {feature.icon}
          </IconContext.Provider>
        </div>
        <div className="desc-relative-up">
          <h5>{feature.title}</h5>
          <p className="paragraph-small">{feature.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="features bmargin">
      <div className="container">
        <div className="title-bundle">
          <div className="caption text-center">
            <h2>What we do</h2>
          </div>
          <div className="section-header text-center">
            <h2>Welcome to our Club</h2>
          </div>
        </div>
        <div className="feature-wrapper">{renderFeatures}</div>
      </div>
    </div>
  );
}

export default Features;
