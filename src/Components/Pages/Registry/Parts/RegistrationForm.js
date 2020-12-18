import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function PlaygroundRegistration() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo" }],
    },
  });
  const ownerSection = useFieldArray({
    control,
    name: "owner",
  });
  const dogSection = useFieldArray({
    control,
    name: "dog",
  });

  const onSubmit = (data) => console.log("data", data);

  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      ks
      <ul>
        {ownerSection.fields.map((item, index) => {
          return (
            <li key={item.index}>
              <div className={`owner${index}`}>
                <div className={`caption`}>
                  <h2></h2>
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  name={`owner[${index}].firstName`}
                  ref={register({ required: true, maxLength: 80 })}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name={`owner[${index}].lastName`}
                  ref={register({ required: true, maxLength: 100 })}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name={`owner[${index}].email`}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                <input
                  type="tel"
                  placeholder="Mobile number"
                  name={`owner[${index}].mobile`}
                  ref={register({
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                <input
                  type="tel"
                  placeholder="Home Phone number"
                  name={`owner[${index}].landline`}
                  ref={register({ minLength: 6, maxLength: 12 })}
                />
                <input
                  type="text"
                  placeholder="Address Line 1"
                  name={`owner[${index}].addressOne`}
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="Address Line 2"
                  name={`owner[${index}].addressTwo`}
                  ref={register}
                />
                <input
                  type="number"
                  placeholder="Zip code"
                  name={`owner[${index}].zip`}
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="City"
                  name={`owner[${index}].city`}
                  ref={register}
                />
                <select
                  name={`owner[${index}].state`}
                  ref={register({ required: true })}
                >
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District of Columbia">
                    District of Columbia
                  </option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Guam">Guam</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>

                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Palau">Palau</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virgin Island">Virgin Island</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>

              <button type="button" onClick={() => ownerSection.remove(index)}>
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
            ownerSection.append();
          }}
        >
          Add Owner
        </button>
      </section>
      <ul>
        {dogSection.fields.map((item, index) => {
          return (
            <li key={item.index}>
              <div className={`dog${index}`}>
                <div className={`caption`}>
                  <h2></h2>
                </div>

                <inputbfgxikuiu
                  type="text"
                  placeholder="Owner's first name"
                  name={`dog[${index}].ownerFirstName`}
                  ref={register({ required: true, maxLength: 80 })}
                />
                <input
                  type="text"
                  placeholder="Owner's last name"
                  name={`dog[${index}].ownerLastName`}
                  ref={register({ required: true, maxLength: 100 })}
                />
                <input
                  type="text"
                  placeholder="Owner's Email"
                  name={`dog[${index}].dogOwnerEmail`}
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />

                <input
                  type="text"
                  placeholder="Registration name"
                  name={`dog[${index}].registrationName`}
                  ref={register}
                />
                <input
                  type="text"
                  placeholder="Call name"
                  name={`dog[${index}].callName`}
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="AKC number"
                  name={`dog[${index}].akcNumber`}
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="Breed"
                  name={`dog[${index}].breed`}
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  placeholder="DOB MM/DD/YYYY"
                  name={`dog[${index}].dob`}
                  ref={register({
                    required: true,
                    pattern: /^(0?[1-9]|1[0-2])[](0?[1-9]|[12]\d|3[01])[](19|20)\d{2}$/,
                  })}
                />
                <input
                  type="text"
                  placeholder="Microchip"
                  name={`dog[${index}].microchip`}
                  ref={register}
                />
                <select
                  name={`dog[${index}].gender`}
                  ref={register({ required: true })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <select
                  name={`dog[${index}].registrationPapers`}
                  ref={register({ required: true })}
                >
                  <option value="AKC">AKC</option>
                  <option value="NGA">NGA</option>
                  <option value="AKC ILP">AKC ILP</option>
                  <option value=" Other"> Other</option>
                </select>
              </div>

              <button type="button" onClick={() => dogSection.remove(index)}>
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
            dogSection.append();
          }}
        >
          Add Dog
        </button>
      </section>
      <input type="submit" />
    </form>
  );
}

export default PlaygroundRegistration;
