import React from "react";
import { useForm } from "react-hook-form";

function SanctionedRegistration() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div className="sanctioned-registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Sanction ID"
          name="Sanction ID"
          ref={register({ required: true })}
        />
      </form>
    </div>
  );
}

export default SanctionedRegistration;
