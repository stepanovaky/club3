import React from "react";
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="caption">
          <h2>Owner Information</h2>
        </div>
        <input
          type="text"
          placeholder="First name"
          name="First name"
          ref={register({ required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          name="Last name"
          ref={register({ required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          name="Email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          name="Mobile number"
          ref={register({ required: true, minLength: 6, maxLength: 12 })}
        />
        <input
          type="text"
          placeholder="Registration ID"
          name="Registration ID"
          ref={register}
        />
        <input
          type="text"
          placeholder="Address Line 1"
          name="Address Line 1"
          ref={register}
        />
        <input
          type="text"
          placeholder="Address Line 2"
          name="Address Line 2"
          ref={register}
        />
        <input type="text" placeholder="City" name="City" ref={register} />
        <select name="State" ref={register}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>

        <div className="caption">
          <h2>Dog information</h2>
        </div>

        <input
          type="text"
          placeholder="Club Sanction Number"
          name="Club Sanction Number"
          ref={register}
        />

        <input
          type="text"
          placeholder="Call Name"
          name="Call Name"
          ref={register}
        />
        <input
          type="text"
          placeholder="Registration Name"
          name="Registration Name"
          ref={register}
        />
        <input type="text" placeholder="Breed" name="Breed" ref={register} />
        <input type="text" placeholder="DOB" name="DOB" ref={register} />
        <select name="Gender" ref={register}>
          <option value="Male">Male</option>
          <option value=" Female"> Female</option>
        </select>
        <input
          type="text"
          placeholder="Microchip"
          name="Microchip"
          ref={register}
        />
        <input
          type="text"
          placeholder="Owner Code"
          name="Owner Code"
          ref={register}
        />
        <input
          type="text"
          placeholder="Expiration"
          name="Expiration"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
