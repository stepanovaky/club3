import React from "react";

export default function Section1({ register }) {
  function addDogOwner(number) {
    const number = useFieldArray({
      control,
      name: `dogOwner${number}`,
    });
    
  }

  {
    

  return (
    <>
      <div>
        <label>First name</label>
        <input
          type="text"
          name="First name"
          ref={register({ required: true, maxLength: 80 })}
        />
      </div>
      <div>
        <label>Last name</label>
        <input
          type="text"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
      </div>
    </>
  );
}
