import React from "react";
import FieldArrayOwnerForm from "./FieldArrayOwnerForm";
import FieldArrayDogForm from "./FieldArrayDogForm";
import { useForm } from "react-hook-form";
import NestedRegistrationForm from "./NestedRegistrationForm";

function RegistrationForm() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm();
  const onSubmit = (data) => console.log("data", data);

  return (
    <div className="register-form">
      <NestedRegistrationForm />
      {/* <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register Owners and Dogs</h1>
          <FieldArrayOwnerForm
            {...{
              control,
              register,
              getValues,
              setValue,
              errors,
            }}
          />
          <FieldArrayDogForm
            {...{ control, register, getValues, setValue, errors }}
          />
        </form>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <input type="submit" />
      </div> */}
    </div>
  );
}

export default RegistrationForm;
