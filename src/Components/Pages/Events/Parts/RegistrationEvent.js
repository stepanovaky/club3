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

function RegistrationEvent() {
  const [ifRegistered, setIfRegistered] = useState(true);

  return (
    <div className="registration-event">
      <Button color="black" onClick={() => setIfRegistered(!ifRegistered)}>
        {ifRegistered ? "I do not have a sanction ID" : "I have a sanction ID"}
      </Button>
      {ifRegistered ? (
        <SanctionedRegistration />
      ) : (
        <NonsanctionedRegistration />
      )}
    </div>
  );
}

export default RegistrationEvent;
