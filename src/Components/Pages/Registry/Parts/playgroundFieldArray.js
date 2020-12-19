import React from "react";
import { useFieldArray } from "react-hook-form";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: "owners",
  });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="text"
                placeholder="First name"
                name={`owners[${index}].firstName`}
                ref={register({ required: true, maxLength: 80 })}
              />
              <input
                type="text"
                placeholder="Last name"
                name={`owners[${index}].lastName`}
                ref={register({ required: true, maxLength: 100 })}
              />
              <input
                type="text"
                placeholder="Email"
                name={`owners[${index}].email`}
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              />
              <input
                type="tel"
                placeholder="Mobile number"
                name={`owners[${index}].mobile`}
                ref={register({
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <input
                type="tel"
                placeholder="Landline"
                name={`owners[${index}].landline`}
                ref={register}
              />
              <input
                type="text"
                placeholder="Address Line 1"
                name={`owners[${index}].addressOne`}
                ref={register({ required: true })}
              />
              <input
                type="text"
                placeholder="Address Line 2"
                name={`owners[${index}].addressTwo`}
                ref={register}
              />
              <input
                type="number"
                placeholder="Zip code"
                name={`owners[${index}].zipCode`}
                ref={register({ required: true })}
              />
              <input
                type="text"
                placeholder="City"
                name={`owners[${index}].city`}
                ref={register({ required: true })}
              />
              <select
                name={`owners[${index}].state`}
                ref={register({ required: true })}
              >
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AS">AS</option>
                <option value="AZ">AZ</option>
                <option value="AR">AR</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DE">DE</option>
                <option value="DC">DC</option>
                <option value="FM">FM</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="GU">GU</option>
                <option value="HI">HI</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="IA">IA</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="ME">ME</option>
                <option value="MH">MH</option>
                <option value="MD">MD</option>
                <option value="MA">MA</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MS">MS</option>
                <option value="MO">MO</option>
                <option value="MT">MT</option>
                <option value="NE">NE</option>
                <option value="NV">NV</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NY">NY</option>
                <option value="NC">NC</option>
                <option value="ND">ND</option>
                <option value="MP">MP</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PW">PW</option>
                <option value="PA">PA</option>
                <option value="PR">PR</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VI">VI</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WV">WV</option>
                <option value="WI">WI</option>
                <option value="WY'">WY'</option>
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
          Add Primary Owner
        </button>
      </section>
    </>
  );
}
