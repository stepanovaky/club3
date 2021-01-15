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
  const [ifRegistered, setIfRegistered] = useState();
  console.log(props);

  //Enter dogs with sanction ID
  //Enter dogs without sanction ID
  return (
    <div className="registration-event">
      {/* <Button color="black" onClick={() => setIfRegistered(!ifRegistered)}>
        {ifRegistered ? "I do not have a sanction ID" : "I have a sanction ID"}
      </Button> */}
      <Button color="black" onClick={() => setIfRegistered(true)}>
        Enter dogs with sanction ID
      </Button>
      <Button color="red" onClick={() => setIfRegistered(false)}>
        Enter dogs without sanction ID
      </Button>
      <p>
        You can add multiple dogs at a time, but they must be either all
        sanctioned or all nonsanctioned at a time.
      </p>
      {ifRegistered === undefined ? null : ifRegistered ? (
        <SanctionedRegistration
          eventId={props.eventId}
          sanctionedPrice={props.sanctionedPrice}
        />
      ) : (
        <NonsanctionedRegistration
          eventId={props.eventId}
          unsanctionedPrice={props.unsanctionedPrice}
        />
      )}
    </div>
  );
}

export default RegistrationEvent;
