import React from "react";
import NestedDogOwnerArray from "./NestedDogOwnerArray";
import { useFieldArray } from "react-hook-form";

function FieldArrayDogForm({ control, register, setValue, getValues }) {
  const dogArray = useFieldArray({
    control,
    name: "dogs",
  });

  return (
    <div>
      <ul>
        {dogArray.fields.map((item, index) => {
          return (
            <li key={item.id}>
              <NestedDogOwnerArray
                nestIndex={index}
                {...{ control, register }}
              />
              <div>
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
                <select
                  name={`dogs[${index}].registrationPapers`}
                  ref={register}
                >
                  <option value="AKC">AKC</option>
                  <option value="NGA">NGA</option>
                  <option value="AKC ILP">AKC ILP</option>
                  <option value=" Other"> Other</option>
                </select>
                <button type="button" onClick={() => dogArray.remove(index)}>
                  Remove Dog
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            dogArray.append();
          }}
        >
          Add Dog
        </button>
      </section>
    </div>
  );
}

export default FieldArrayDogForm;
