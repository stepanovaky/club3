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
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>Secondary Owner:</label>
            <input
              type="text"
              placeholder="First name"
              name={`dogOwner[${nestIndex}].secondary[${k}].firstName`}
              ref={register({ required: true, maxLength: 80 })}
            />
            <input
              type="text"
              placeholder="Last name"
              name={`dogOwner[${nestIndex}].secondary[${k}].lastName`}
              ref={register({ required: true, maxLength: 100 })}
            />
            <input
              type="text"
              placeholder="Email"
              name={`dogOwner[${nestIndex}].secondary[${k}].email`}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <button type="button" onClick={() => remove(k)}>
              Delete Secondary Owner
            </button>
          </div>
        );
      })}

      <button type="button" onClick={() => append()}>
        Add Secondary Owner
      </button>

      <hr />
    </div>
  );
};
