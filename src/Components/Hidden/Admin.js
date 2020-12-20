import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";

function Admin() {
  const { register, handleSubmit, errors } = useForm();
  // const [answer, setAnswer] = useState();
  const onSubmit = (data) => {
    console.log(data);
    const dogOwnerRef = db.collection("ownersAndDogs");
    dogOwnerRef
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data().l);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };
  console.log(errors);

  return (
    <div className="admin">
      <div className="container">
        <div className="frame">
          <div className="retrieve-data">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Get Dog(s)
                <select name="getDog" ref={register}>
                  <option value="registeredName"> Registered Name</option>
                  <option value="callName"> Call Name</option>
                  <option value="breed"> Breed</option>
                  <option value="gender">Gender</option>
                  <option value="DOB"> DOB 'MM/DD/YYYY'</option>
                  <option value="registrationPapers">
                    {" "}
                    Registration Papers
                  </option>
                  <option value="papers"> Type of Registration Paper</option>
                </select>
              </label>
              <input
                type="text"
                placeholder="Input"
                name="input1"
                ref={register}
              />

              <input type="submit" />
            </form>
            <h5>OR</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Get Owner(s)
                <select name="ownerType" ref={register}>
                  <option value="owner">Owner</option>
                  <option value="primary"> Primary Owner</option>
                  <option value="secondary"> Secondary Owner</option>
                </select>
                <select name="getOwner" ref={register}>
                  <option value="addressOne || addressTwo">Address</option>
                  <option value="city"> City</option>
                  <option value="email"> Email</option>
                  <option value="firstName"> First Name</option>
                  <option value="lastName"> Last Name</option>
                  <option value="mobile"> Mobile</option>
                  <option value="landline"> Landline</option>
                  <option value="state"> State</option>
                  <option value="zipCode"> Zip Code</option>
                </select>
              </label>
              <input
                type="text"
                placeholder="input"
                name="input2"
                ref={register}
              />

              <input type="submit" />
            </form>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
