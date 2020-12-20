import React from "react";
import FieldArrayOwnerForm from "./FieldArrayOwnerForm";
import FieldArrayDogForm from "./FieldArrayDogForm";
import { useForm } from "react-hook-form";
import NestedRegistrationForm from "./NestedRegistrationForm";

function RegistrationForm() {
  return (
    <div className="register-form">
      <NestedRegistrationForm />
    </div>
  );
}

export default RegistrationForm;
