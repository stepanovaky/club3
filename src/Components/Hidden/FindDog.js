import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiUrl } from "../helpers/backend";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "semantic-ui-react";
import RenderDog from "./RenderDog";

function FindDog() {
  const [dog, setDog] = useState([]);
  const [message, setMessage] = useState();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const fetchDog = await fetch(`${apiUrl}/api/find/dog`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        data: JSON.stringify(data),
      },
    });
    const response = fetchDog;

    if (response.status === 200) {
      const fetchResponse = await response.json();
      setDog([JSON.parse(fetchResponse.message)]);
    }
    setMessage();
    if (response.status === 400) {
      const fetchResponse = await response.json();
      setMessage("No dog found");
    }
  };

  const displayDog =
    dog.length >= 1 && dog[0] !== undefined
      ? dog[0] === undefined
        ? null
        : dog[0].map((d, index) => {
            return (
              <div key={index}>
                <RenderDog d={d} />
              </div>
            );
          })
      : null;

  return (
    <div className="find-dog">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Form.Group widths="equal">
            <Form.Field>
              <label>
                Find Dog by:
                <select name="findDogs" ref={register}>
                  <option value="AKC Number * preferred">
                    AKC Number * preferred
                  </option>
                  <option value="registeredName">Registered Name</option>
                  <option value="callName"> Call Name</option>
                  <option value="id"> ID</option>
                  <option value="sanctionId"> Sanction ID</option>
                </select>
              </label>
            </Form.Field>
            <Form.Field>
              <label>
                Input
                <input type="text" name="dogItem" ref={register} />
              </label>
            </Form.Field>
          </Form.Group>
        </Container>{" "}
        <p>{message}</p>
        <Button type="submit">Submit</Button>
      </Form>

      <div>{dog.length === 0 ? null : displayDog}</div>
    </div>
  );
}

export default FindDog;
