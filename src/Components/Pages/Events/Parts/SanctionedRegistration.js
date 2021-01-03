import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Header,
  Button,
  Form,
  Segment,
  Label,
} from "semantic-ui-react";
import { apiUrl } from "../../../helpers/backend";

function SanctionedRegistration() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState();
  const [sanction, setSanction] = useState();

  const onSubmit = async (data) => {};

  const findDog = () => {
    const callName = document.getElementById("call");
    console.log(callName.value);
    fetchDog(callName.value.toLowerCase());
  };

  const fetchDog = async (name) => {
    const fetchDog = await fetch(`${apiUrl}/api/register/event/sanctioned`, {
      method: "GET",
      headers: {
        dog: JSON.stringify(name),
      },
    });
    const response = await fetchDog.json();
    console.log(response.message);
    if (response.message === "No such dog") {
      setMessage(response.message);
    } else {
      setMessage();
      setSanction(response.message);
    }
  };

  return (
    <div className="sanctioned-registration">
      <Segment vertical>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                Call Name
                <input
                  onChange={findDog}
                  id="call"
                  type="text"
                  placeholder="Call name"
                  name="callName"
                  ref={register({ required: true })}
                />
              </label>
              <p>{message}</p>
            </Form.Field>
            <Form.Field>
              <label>
                Sanction Id
                <input
                  type="text"
                  defaultValue={sanction}
                  placeholder="Sanction ID"
                  name="sanctionId"
                  ref={register({ required: true })}
                />
              </label>
            </Form.Field>
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </div>
  );
}

export default SanctionedRegistration;
