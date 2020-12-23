import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { db } from "../../firebase";

function Admin() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm();
  const getOwner = useFieldArray({
    control,
    name: "getOwner",
  });
  const getDog = useFieldArray({
    control,
    name: "getDog",
  });
  const [ownerAnswer, setOwnerAnswer] = useState();
  const [dogAnswer, setDogAnswer] = useState();

  const onSubmit1 = (data) => {
    console.log(data);

    if (data.input1 !== "") {
      if (data.findOwner === "email") {
        db.collection("owners")
          .doc(data.input1)
          .get()
          .then(function (doc) {
            if (doc.exists) {
              console.log(doc.data());
              const ownerAnswer = (
                <ul>
                  <li>Full Name: {doc.data().fullName}</li>
                  <li>ID: {doc.data().id}</li>
                  <li>Email: {doc.data().email}</li>

                  <li>Mobile Phone Number: {doc.data().mobile}</li>
                  <li>Landline Phone Number: {doc.data().landline}</li>
                  <li>
                    Address: {doc.data().address ? doc.data().address : null}
                  </li>
                  <li>City: {doc.data().city ? doc.data().city : null}</li>
                  <li>State: {doc.data().state ? doc.data().state : null}</li>
                  <li>Zip Code: {doc.data().zip ? doc.data().zip : null}</li>
                  <li>Dog ID(s): {doc.data().dogId}</li>
                </ul>
              );
              console.log(doc.data().dogId);
              if (
                doc.data().dogId !== undefined &&
                doc.data().dogId.length == 1
              ) {
                db.collection("dogs")
                  .where("id", "==", doc.data().dogId[0])
                  .get()
                  .then(function (querySnapshot) {
                    console.log(querySnapshot.size);
                    querySnapshot.forEach(function (doc) {
                      // doc.data() is never undefined for query doc snapshots
                      console.log(doc.id, " => ", doc.data());
                      const oneDog = (
                        <ul>
                          <li>Registered Name: {doc.data().registeredName}</li>
                          <li>Call Name: {doc.data().callNumber}</li>
                          <li>AKC Number: {doc.data().akcNumber}</li>
                          <li>Sanction ID: {doc.data().sanctionId}</li>
                          <li>ID: {doc.data().id}</li>
                          <li>Gender: {doc.data().gender}</li>
                          <li>Breed: {doc.data().breed}</li>
                          <li>
                            Registration Papers Type:{" "}
                            {doc.data().registrationPapersType}
                          </li>
                          <li>
                            Owner Id(s):{" "}
                            {doc.data().ownerIds.map((owner) => {
                              return <li>{owner}</li>;
                            })}
                          </li>
                        </ul>
                      );
                      setDogAnswer(oneDog);
                    });
                  });
              } else if (doc.data().dogId.length > 1) {
                doc.data().dogId.map((dog) => {
                  db.collection("dogs")
                    .where("id", "==", dog)
                    .get()
                    .then(function (querySnapshot) {
                      console.log(querySnapshot.empty);
                      querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                      });
                    });
                });
              }
              setOwnerAnswer(ownerAnswer);
            }
          });
      }
    }
  };

  // db.collection("owners")
  // .doc(`${owner.email}`)
  // .get()
  // .then(function (doc) {
  //   if (doc.exists) {
  //     masterListRegistered.push({ secondary: { ...doc.data() } });
  //   } else {
  //     console.log("no such document");
  //     db.collection("owners")
  //       .doc(`${owner.email}`)
  //       .set({
  //         fullName: `${owner.firstName} ${owner.lastName}`,
  //         firstName: owner.firstName,
  //         lastName: owner.lastName,
  //         email: owner.email,
  //         id: id,
  //         dogId: [allDogsWithPrimaryOwnerIds[i].id],
  //       })
  //       .then(function () {
  //         masterListUnregistered.push({
  //           secondary: {
  //             dogName: allDogsWithPrimaryOwnerIds[i].registeredName,
  //             fullName: `${owner.firstName} ${owner.lastName}`,
  //             firstName: owner.firstName,
  //             lastName: owner.lastName,
  //             email: owner.email,
  //             id: id,
  //             dogId: [allDogsWithPrimaryOwnerIds[i].id],
  //           },
  //         });
  //         console.log("document successfully written");
  //       })
  //       .catch(function (error) {
  //         console.error("error writing document: ", error);
  //       });
  //   }
  // });

  return (
    <div className="admin">
      <div className="container">
        <div className="frame">
          <div className="retrieve-data">
            <form onSubmit={handleSubmit(onSubmit1)}>
              <label>
                Find owner by
                <select name="findOwner" ref={register}>
                  <option value="email">Email * preferred </option>
                  <option value="fullName">Full name</option>
                  <option value="firstName">First name</option>
                  <option value="lastName"> Last name</option>
                  <option value="mobile || landline"> Phone</option>
                  <option value="address"> Address</option>
                  <option value="zipCode"> Zip code</option>
                  <option value="city"> City</option>
                  <option value="state"> State</option>
                  <option value="id">ID </option>
                </select>
              </label>
              <input
                type="text"
                placeholder="Input"
                name="input1"
                ref={register}
              />
              OR
              <label>
                Find dog by
                <select name="findDog" ref={register}>
                  <option value="registeredName">Registered Name</option>
                  <option value="callName"> Call Name</option>
                  <option value="breed"> Breed</option>
                  <option value="gender"> Gender</option>
                  <option value="akcNumber"> AKC Number</option>
                  <option value="registrationPapersType">
                    {" "}
                    Type of registration papers
                  </option>
                  <option value="id">ID </option>
                  <option value="sanctionId">Sanction ID</option>
                </select>
              </label>
              <input
                type="text"
                placeholder="Input"
                name="input2"
                ref={register}
              />
              <input type="submit" />
            </form>
            {ownerAnswer !== undefined ? ownerAnswer : null}
            {dogAnswer !== undefined ? dogAnswer : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
