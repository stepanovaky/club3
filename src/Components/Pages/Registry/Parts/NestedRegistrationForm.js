import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./playgroundFieldArray";
import FieldArray2 from "./playgroundFieldArray2";

const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
    {
      name: "useFieldArray2",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
  ],
};

function NestedRegistrationForm() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Dog and Owner Registration</h1>
      <p>
        Primary owners own all the added dogs and will be notified every time a
        dog is registered for an event. Secondary owners can be customized to
        the dog and also have the ability to register a dog for an event.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
      <FieldArray2
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}

export default NestedRegistrationForm;
