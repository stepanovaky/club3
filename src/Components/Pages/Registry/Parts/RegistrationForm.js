import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineMinusCircle } from "react-icons/hi";

function RegistrationForm() {
  const [ownerCounter, setOwnerCounter] = useState(1);
  const [dogCounter, setDogCounter] = useState(1);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  //PLAYGROUND

  // const showList = [];

  const itemInList1 = (
    <div className="duplicate-owner">
      <div className="caption">
        <h2>Owner Information</h2>
      </div>
      <input
        type="text"
        placeholder={`First name`}
        name={`First name ${ownerCounter}`}
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder={`Last name`}
        name={`Last name ${ownerCounter}`}
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder={`Email`}
        name={`Email ${ownerCounter}`}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder={`Mobile number`}
        name={`Mobile number ${ownerCounter}`}
        ref={register({ required: true, minLength: 6, maxLength: 12 })}
      />

      <input
        type="text"
        placeholder={`Address Line 1`}
        name={`Address Line 1 ${ownerCounter}`}
        ref={register({ required: true })}
      />

      <input
        type="text"
        placeholder={`Address Line 2`}
        name={`Address Line 2 ${ownerCounter}`}
        ref={register}
      />

      <input
        type="number"
        placeholder={`Zip Code `}
        name={`Zip Code ${ownerCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="City"
        name={`City ${ownerCounter}`}
        ref={register({ required: true })}
      />
      <select name="State" ref={register({ required: true })}>
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
    </div>
  );

  const removeOwnerFromList = () => {
    setOwnerFields(ownerFields.splice(ownerFields, ownerFields.length));
  };

  const itemInList2 = (
    <div className="duplicate-owner">
      <div className="caption">
        <span onClick={removeOwnerFromList}>
          <h2>
            Owner Information <HiOutlineMinusCircle className="minus-circle" />
          </h2>
        </span>
      </div>
      <input
        type="text"
        placeholder={`First name`}
        name={`First name ${ownerCounter}`}
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder={`Last name`}
        name={`Last name ${ownerCounter}`}
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder={`Email`}
        name={`Email ${ownerCounter}`}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder={`Mobile number`}
        name={`Mobile number ${ownerCounter}`}
        ref={register({ required: true, minLength: 6, maxLength: 12 })}
      />

      <input
        type="text"
        placeholder={`Address Line 1`}
        name={`Address Line 1 ${ownerCounter}`}
        ref={register({ required: true })}
      />

      <input
        type="text"
        placeholder={`Address Line 2`}
        name={`Address Line 2 ${ownerCounter}`}
        ref={register}
      />

      <input
        type="number"
        placeholder={`Zip Code `}
        name={`Zip Code ${ownerCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="City"
        name={`City ${ownerCounter}`}
        ref={register({ required: true })}
      />
      <select name="State" ref={register({ required: true })}>
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
    </div>
  );

  const addOwnerList = [itemInList1];
  const renderList = addOwnerList.map((item) => {
    return item;
  });

  const addOwnerItemToList = () => {
    setOwnerFields((addOwnerList) => [...addOwnerList, itemInList2]);
    console.log(addOwnerList);
    console.log(ownerFields);
    // setOwnerCounter(ownerCounter + 1);
  };

  const raiseOwnerCounter = () => {
    setOwnerCounter(ownerCounter + 1);
  };

  const [ownerFields, setOwnerFields] = useState([itemInList1]);

  const dogItemInList1 = (
    <div className="duplicate-dog">
      <div className="caption">
        <h2>Dog information</h2>
      </div>

      <input
        type="text"
        placeholder="Call Name"
        name={`Call Name ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Registration Name"
        name={`Registration Name ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="AKC Number"
        name={`AKC Number ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input type="text" placeholder="Breed" name="Breed" ref={register} />
      <input type="text" placeholder="DOB" name="DOB" ref={register} />
      <input
        type="text"
        placeholder="Microchip"
        name={`Microchip ${dogCounter}`}
        ref={register}
      />
      <div>
        <div className="gender-div">
          <label>
            Gender
            <select
              name={`Gender ${dogCounter}`}
              ref={register({ required: true })}
            >
              <option value="Male">Male</option>
              <option value=" Female"> Female</option>
            </select>
          </label>
          <div>
            <label>
              Attach Registration Papers
              <select name="Registration Papers Attached" ref={register}>
                <option value="AKC">AKC</option>
                <option value="NGA">NGA</option>
                <option value="AKC ILP">AKC ILP</option>
                <option value=" Other"> Other</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const removeDogFromList = () => {
    setDogFields(dogFields.splice(dogFields, dogFields.length));
  };

  const dogItemInList2 = (
    <div className="dog-duplicate">
      <div className="caption">
        <span onClick={removeDogFromList}>
          <h2>
            Dog Information <HiOutlineMinusCircle className="minus-circle" />
          </h2>
        </span>
      </div>

      <input
        type="text"
        placeholder="Call Name"
        name={`Call Name ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Registration Name"
        name={`Registration Name ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="AKC Number"
        name={`AKC Number ${dogCounter}`}
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Breed"
        name="Breed"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="DOB"
        name="DOB"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Microchip"
        name={`Microchip ${dogCounter}`}
        ref={register}
      />
      <div>
        <div className="gender-div">
          <label>
            Gender
            <select
              name={`Gender ${dogCounter}`}
              ref={register({ required: true })}
            >
              <option value="Male">Male</option>
              <option value=" Female"> Female</option>
            </select>
          </label>
          <div>
            <label>
              Attach Registration Papers
              <select name="Registration Papers Attached" ref={register}>
                <option value="AKC">AKC</option>
                <option value="NGA">NGA</option>
                <option value="AKC ILP">AKC ILP</option>
                <option value=" Other"> Other</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const addDogList = [dogItemInList1];
  const renderDogList = addDogList.map((item) => {
    return item;
  });

  const addDogItemToList = () => {
    setOwnerFields((addDogList) => [...addDogList, dogItemInList2]);
    console.log(addDogList);
    console.log(dogFields);
    // setOwnerCounter(ownerCounter + 1);
  };

  const raiseDogCounter = () => {
    setDogCounter(dogCounter + 1);
  };

  const [dogFields, setDogFields] = useState([dogItemInList1]);

  return (
    <div className="registration-form">
      <form className="registration" onSubmit={handleSubmit(onSubmit)}>
        <div className="duplicate-owner">
          {ownerFields}

          <div className="caption">
            <h2>
              Add owner{" "}
              <span onClick={addOwnerItemToList} className="plus-icon">
                <FiPlusCircle />
              </span>
            </h2>
          </div>
          {dogFields}

          <div className="caption">
            <h2>
              Add dog{" "}
              <span onClick={addDogItemToList} className="plus-icon">
                <FiPlusCircle />
              </span>
            </h2>
          </div>

          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
