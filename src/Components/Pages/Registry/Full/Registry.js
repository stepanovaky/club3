import React from "react";
// import PlaygroundRegistration from "../Parts/PlaygroundRegistration";
import RegistrationForm from "../Parts/RegistrationForm";

function Registry() {
  return (
    <div className="registry">
      <div className="container">
        <div>
          <div className="frame registration-frame">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry;
