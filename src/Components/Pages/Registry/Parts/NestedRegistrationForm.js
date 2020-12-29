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

  const onChange = () => {
    alert(getValues("toast"));
  };

  // const handleToast = (event) => {
  //   event.preventDefault();

  //   console.log(event.target["owners.firstName"].value);
  // };

  const onSubmit = async (data) => {
    console.log(data);

    data.dogs.map((file) => {
      const urlList = [];
      if (file.file !== undefined && file.file.length !== 0) {
        const uploadTask = storageRef
          .child(`dogs/${file.akcNumber}/${file.file[0].name}`)
          .put(file.file[0]);

        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(function (downloadURL) {
            return downloadURL;
          })
          .then((res) => {
            urlList.push({ ...file, res });
          })
          .then(() => {
            console.log(urlList);
            const transformedData = {
              ...data,
              dogsWithFileNames: urlList,
            };
            return transformedData;
          })
          .then((res) => {
            console.log(res);
            const postUser = fetch(`${apiUrl}/api/registration`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(res),
            });
          });
      } else {
        urlList.push({ ...file });

        const transformedData = {
          ...data,
          dogsWithFileNames: urlList,
        };

        const postUser = fetch(`${apiUrl}/api/registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData),
        });
      }
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <FieldArray
              {...{ control, register, getValues, setValue, errors }}
            />
            <FieldArray2
              {...{ control, register, getValues, setValue, errors }}
            />
          </Container>
          <Container className="add-margin">
            <Button type="submit"> Submit </Button>{" "}
          </Container>
        </Form>
        {/* </form> */}
      </div>
      <Button secondary type="Button" onClick={() => reset()}>
        Reset
      </Button>
    </div>
  );
}

export default NestedRegistrationForm;
