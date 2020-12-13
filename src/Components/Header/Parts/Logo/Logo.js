import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <div className="logo-container">
        <Link to="/">
          <p>LOGO</p>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
