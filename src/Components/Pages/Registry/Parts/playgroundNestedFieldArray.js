import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `dogOwner[${nestIndex}].nestedArray`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id}>
            <label>Secondary dog owners</label>
            <input
              type="text"
              placeholder="First name"
              name={`dogOwner[${nestIndex}].nestedArray[${k}].ownerFirstName`}
              ref={register({ required: true, maxLength: 80 })}
            />
            <input
              type="text"
              placeholder="Last name"
              name={`dogOwner[${nestIndex}].nestedArray[${k}].ownerLastName`}
              ref={register({ required: true, maxLength: 100 })}
            />
            <input
              type="text"
              placeholder="Email"
              name={`dogOwner[${nestIndex}].nestedArray[${k}].ownerEmail`}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete Nested
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            field1: "field1",
            field2: "field2",
          })
        }
      >
        Add Secondary Dog Owners
      </button>

      <hr />
    </div>
  );
};
