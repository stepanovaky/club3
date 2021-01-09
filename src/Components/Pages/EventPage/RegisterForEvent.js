import React from "react";
// import RegistrationForm from "../Registry/Parts/RegistrationForm";
import RegistrationEvent from "../Events/Parts/RegistrationEvent";

function RegisterForEvent(props) {
  console.log(props);

  return (
    <div className="register-for-event">
      <RegistrationEvent
        sanctionedPrice={props.sanctionedPrice}
        unsanctionedPrice={props.unsanctionedPrice}
      />
    </div>
  );
}

export default RegisterForEvent;
