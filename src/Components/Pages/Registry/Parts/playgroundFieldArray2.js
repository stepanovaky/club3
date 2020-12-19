import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./playgroundNestedFieldArray";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "dogs",
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <NestedArray nestIndex={index} {...{ control, register }} />
              <input
                type="text"
                placeholder="Registered name"
                name={`dogs[${index}].registeredName`}
                ref={register}
              />
              <input
                type="text"
                placeholder="Call name"
                name={`dogs[${index}].callName`}
                ref={register}
              />
              <input
                type="text"
                placeholder="Breed"
                name={`dogs[${index}].breed`}
                ref={register}
              />
              <input
                type="text"
                placeholder="DOB"
                name={`dogs[${index}].dob`}
                ref={register}
              />
              <select name={`dogs[${index}].gender`} ref={register}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select name={`dogs[${index}].registrationPapers`} ref={register}>
                <option value="AKC">AKC</option>
                <option value="NGA">NGA</option>
                <option value="AKC ILP">AKC ILP</option>
                <option value=" Other"> Other</option>
              </select>

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({ name: "append" });
          }}
        >
          Add Dog
        </button>
      </section>
    </>
  );
}
