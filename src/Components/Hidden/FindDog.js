import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { apiUrl } from "../helpers/backend";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "semantic-ui-react";

function FindDog() {
  const [dog, setDog] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
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
      console.log(fetchResponse);
      setDog([JSON.parse(fetchResponse.message)]);
    }
    if (response.status === 400) {
      const fetchResponse = await response.json();
      console.log(fetchResponse);
    }
  };

  const displayDog = dog.map((d) => {
    console.log(d);
    return (
      <ul>
        <li>Registered Name: {d.registeredName}</li>
        <li>Call Name: {d.callName}</li>
        <li>AKC Number: {d.akcNumber}</li>
        <li>Sanction Id: {d.sanctionId}</li>
        <li>ID: {d.id}</li>
        <li>
          Registration Status: {d.registered ? "Registered" : "Not registered"}
        </li>
        <li>Microchip: {d.microchip}</li>
        <li>Gender: {d.gender}</li>
        <li>DOB: {d.dob}</li>
        <li>Breed: {d.breed}</li>
        {/* <li>Expires: {format(new Date(d.exp), "MMM")}</li> */}
        <li>Registration Papers: {d.registrationPapersType}</li>
        <li>
          <Link to={d.registrationPapersUrl} target="_blank" download>
            View Registration Papers
          </Link>
        </li>
        <li>
          Primary Owner Ids:{" "}
          {
            <ol>
              {d.primaryIds.map((id) => {
                return <li>{id}</li>;
              })}
            </ol>
          }
        </li>
        <li>
          Secondary Owner Ids:{" "}
          {
            <ol>
              {d.secondaryIds.map((id) => {
                return <li>{id}</li>;
              })}
            </ol>
          }
        </li>
      </ul>
    );
  });

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
        <Button type="submit">Submit</Button>
      </Form>
      <div>{dog !== undefined ? displayDog : null}</div>
    </div>
  );
}

export default FindDog;
