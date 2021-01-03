import React from "react";
import { useForm } from "react-hook-form";
import { storageRef } from "../../../../firebase";
import FieldArray from "./playgroundFieldArray";
import FieldArray2 from "./playgroundFieldArray2";
import { apiUrl } from "../../../helpers/backend";
import { Container, Header, Button, Form } from "semantic-ui-react";
import { FaAllergies } from "react-icons/fa";

function NestedRegistrationForm() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const transformedData = async () => {
      const urlList = [];
      for await (let dog of data.dogs) {
        // console.log(dog);
        if (dog.file !== undefined || dog.file.length !== 0) {
          // console.log("thing");
          urlList.push({ ...dog, akcPapersUrl: "" });
        } else {
          // console.log("boo");

          // .then((res) => {
          //   ;
          // });
          const uploadTask = await storageRef
            .child(`dog/${dog.akcNumber}/${dog.file[0].name}`)
            .put(dog.file[0]);

          const akcPapersUrl = await uploadTask.ref.getDownloadURL();
          urlList.push({ ...dog, akcPapersUrl });
        }
      }
      console.log(urlList);
      return urlList;
    };

    transformedData()
      .then((res) => {
        data = { ...data, transformed: res };
        return data;
      })
      .then((res) => {
        // console.log(res);
        setTimeout(function () {
          sendRegistration(res);
        }, 500);
      });
  };

  const sendRegistration = async (data) => {
    // console.log("boo");
    const postData = await fetch(`${apiUrl}/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <Container text>
        <Header as="h1">Owner and Dog Registration</Header>
        <p>
          Primary owners own all the added dogs and will be notified every time
          a dog is registered for an event. Secondary owners can be customized
          to the dog and also have the ability to register a dog for an event.
          You can only add two secondary owners per dog.
        </p>
      </Container>
      <div className="registration-container">
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}

        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FieldArray
              {...{ control, register, getValues, setValue, errors }}
            />
            <FieldArray2
              {...{ control, register, getValues, setValue, errors }}
            />
            <Button type="submit"> Submit </Button>{" "}
          </Form>{" "}
        </Container>

        {/* </form> */}
      </div>
    </div>
  );
}

export default NestedRegistrationForm;
