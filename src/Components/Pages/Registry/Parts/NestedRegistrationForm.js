import React, { useState, useEffect } from "react";
// import { apiUrl } from "../../../helpers/backend";
import { useForm } from "react-hook-form";
import FieldArray from "./playgroundFieldArray";
import FieldArray2 from "./playgroundFieldArray2";
import { db } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import addYears from "date-fns/addYears";
import NestedDogOwnerArray from "./NestedDogOwnerArray";
import { GiHighTide, GiThroneKing } from "react-icons/gi";
import { apiUrl } from "../../../helpers/backend";

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
    const transformedFileName = data.dogs.map((file) => {
      const fileName = file.file.length !== 0 ? file.file[0].name : false;
      return (file = [{ ...file, fileName }]);
    });
    console.log(transformedFileName);
    const transformedData = {
      ...data,
      dogsWithFileNames: [transformedFileName],
    };
    console.log(transformedData);
    const postUser = await fetch(`${apiUrl}/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformedData),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* onSubmit={handleSubmit(onSubmit) */}
      <h1>Dog and Owner Registration</h1>
      <p>
        Primary owners own all the added dogs and will be notified every time a
        dog is registered for an event. Secondary owners can be customized to
        the dog and also have the ability to register a dog for an event. You
        can only add two secondary owners per dog.
      </p>

      <FieldArray {...{ control, register, getValues, setValue, errors }} />
      <FieldArray2 {...{ control, register, getValues, setValue, errors }} />

      <button type="button" onClick={() => reset()}>
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}

export default NestedRegistrationForm;
