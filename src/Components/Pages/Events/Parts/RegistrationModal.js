import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import RegistrationEvent from "./RegistrationEvent";

function RegistrationModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="registration-modal">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Register for event</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Register your dog for this event</Header>
          </Modal.Description>
          <RegistrationEvent />
        </Modal.Content>

        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default RegistrationModal;
