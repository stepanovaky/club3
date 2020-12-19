import React from "react";
import { useFieldArray } from "react-hook-form";

function NestedDogOwnerArray({ nestIndex, control, register }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `dogOwner[${nestIndex}].nestedArray`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id}>
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
      <button type="button" onClick={() => append()}>
        Append Nested
      </button>
    </div>
  );
}

export default NestedDogOwnerArray;
