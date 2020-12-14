import React from "react";
import { Link } from "react-router-dom";
import { pageLinks } from "../../../helpers/lists-helpers";

function Bar() {
  const barLinks = pageLinks.map((l, index) => {
    return (
      <span key={index} className="bar-links">
        <Link className="one-link" to={l.link}>
          {l.page}
        </Link>
      </span>
    );
  });

  return <div className="bar">{barLinks}</div>;
}

export default Bar;
