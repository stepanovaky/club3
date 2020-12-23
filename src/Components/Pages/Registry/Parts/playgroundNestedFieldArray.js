import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `dogOwner[${nestIndex}].nestedArray`,
  });

  const [num, setNum] = useState(0);

  let secondaryNum = 0;
  const isDisabled = num === 2 ? true : false;

  const addSecondary = () => {
    append();
    setNum(num + 1);
  };

  const removeSecondary = (num) => {
    remove(num);
    setNum(num - 1);
  };

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
            <button type="button" onClick={() => removeSecondary(k)}>
              Delete Secondary Owner
            </button>
          </div>
        );
      })}

      <button type="button" onClick={addSecondary} disabled={isDisabled}>
        Add Secondary Owner
      </button>

      <hr />
    </div>
  );
};
