import React, { useState } from "react";
import {
  Form,
  Checkbox,
  Button,
  Header,
  Image,
  Modal,
} from "semantic-ui-react";
import SanctionedRegistration from "./SanctionedRegistration";
import NonsanctionedRegistration from "./NonsanctionedRegistration";

function RegistrationEvent(props) {
  const [ifRegistered, setIfRegistered] = useState(true);
  console.log(props);

  return (
    <div className="registration-event">
      <Button color="black" onClick={() => setIfRegistered(!ifRegistered)}>
        {ifRegistered ? "I do not have a sanction ID" : "I have a sanction ID"}
      </Button>
      {ifRegistered ? (
        <SanctionedRegistration sanctionedPrice={props.sanctionedPrice} />
      ) : (
        <NonsanctionedRegistration
          unsanctionedPrice={props.unsanctionedPrice}
        />
      )}
    </div>
  );
}

export default RegistrationEvent;
