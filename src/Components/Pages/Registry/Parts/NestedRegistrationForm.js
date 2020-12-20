import React from "react";
import { apiUrl } from "../../../helpers/backend";
import { useForm } from "react-hook-form";
import FieldArray from "./playgroundFieldArray";
import FieldArray2 from "./playgroundFieldArray2";
import { db } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import addYears from "date-fns/addYears";
import NestedDogOwnerArray from "./NestedDogOwnerArray";

const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
    {
      name: "useFieldArray2",
      nestedArray: [{ field1: "field1", field2: "field2" }],
    },
  ],
};

function NestedRegistrationForm() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });
  const onSubmit = async (data) => {
    //PRIMARY OWNERS ADDED
    const masterListUnregistered = [];
    const masterListRegistered = [];

    const allDogs = data.dogs.map((dog, index) => {
      return {
        registeredName: dog.registeredName,
        callName: dog.callName,
        akcNumber: dog.akcNumber,
        breed: dog.breed,
        dob: dog.dob,
        gender: dog.gender,
        registrationPapersType: dog.registrationPapers,
        registrationPapersRef: `${dog.registeredName}RegistrationPapers`,
        id: uuidv4(),
        index: index,
        sanctionId: [
          dog.registeredName.slice(0, 2),
          dog.callName.slice(0, 2),
          dog.akcNumber.slice(0, 2),
          dog.breed.slice(0, 1),
          dog.dob.slice(0, 1),
          dog.gender.slice(0, 1),
          //
          index,
        ].join(""),
      };
    });

    const allDogsIds = allDogs.map((dogIds) => {
      return dogIds.id;
    });

    const primaryOwners = data.owners.map((owner) => {
      return {
        fullName: `${owner.firstName} ${owner.lastName}`,
        firstName: owner.firstName,
        lastName: owner.lastName,
        address: `${owner.addressOne} ${owner.addressTwo}`,
        city: owner.city,
        zip: owner.zipCode,
        state: owner.state,
        email: owner.email,
        mobile: owner.mobile,
        landline: owner.landline,
        id: uuidv4(),
        exp: addYears(new Date(), 1),
        dogIds: allDogsIds,
      };
    });

    primaryOwners.map((owner) => {
      db.collection("owners")
        .doc(`${owner.email}`)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            masterListRegistered.push({ primary: { ...doc.data() } });
          } else {
            console.log("no such document");
            db.collection("owners")
              .doc(`${owner.email}`)
              .set({
                ...owner,
              })
              .then(function () {
                masterListUnregistered.push({ primary: { ...owner } });
                console.log("document successfully written");
              })
              .catch(function (error) {
                console.error("error writing document: ", error);
              });
          }
        });
    });

    const primaryOwnerIds = primaryOwners.map((ids) => {
      return ids.id;
    });

    const allDogsWithPrimaryOwnerIds = allDogs.map((dog) => {
      return { ...dog, ownerIds: primaryOwnerIds };
    });
    allDogsWithPrimaryOwnerIds.map((dog) => {
      db.collection("dogs")
        .doc(`${dog.akcNumber}`)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            masterListRegistered.push({ allDogs: { ...doc.data() } });
          } else {
            console.log("no such document");
            db.collection("dogs")
              .doc(`${dog.akcNumber}`)
              .set({
                ...dog,
              })
              .then(function () {
                masterListUnregistered.push({ allDogs: { ...dog } });
                console.log("document successfully written");
              })
              .catch(function (error) {
                console.error("error writing document: ", error);
              });
          }
        });
    });

    if (data.dogOwner != undefined) {
      const secondary = {
        ...data.dogOwner.map((owner) => owner.secondary),
      };
      for (let i = 0; i < allDogsWithPrimaryOwnerIds.length; i++) {
        if (secondary[i] != undefined) {
          secondary[i].map((owner) => {
            console.log(owner);
            const id = uuidv4();
            allDogsWithPrimaryOwnerIds[i].ownerIds.push(id);
            console.log(allDogsWithPrimaryOwnerIds);
            db.collection("owners")
              .doc(`${owner.email}`)
              .get()
              .then(function (doc) {
                if (doc.exists) {
                  masterListRegistered.push({ secondary: { ...doc.data() } });
                } else {
                  console.log("no such document");
                  db.collection("owners")
                    .doc(`${owner.email}`)
                    .set({
                      fullName: `${owner.firstName} ${owner.lastName}`,
                      firstName: owner.firstName,
                      lastName: owner.lastName,
                      email: owner.email,
                      id: id,
                      dogId: [allDogsWithPrimaryOwnerIds[i].id],
                    })
                    .then(function () {
                      masterListUnregistered.push({
                        secondary: {
                          dogName: allDogsWithPrimaryOwnerIds[i].registeredName,
                          fullName: `${owner.firstName} ${owner.lastName}`,
                          firstName: owner.firstName,
                          lastName: owner.lastName,
                          email: owner.email,
                          id: id,
                          dogId: [allDogsWithPrimaryOwnerIds[i].id],
                        },
                      });
                      console.log("document successfully written");
                    })
                    .catch(function (error) {
                      console.error("error writing document: ", error);
                    });
                }
              });
          });
        }
      }
    }
    console.log(masterListUnregistered);
    console.log(masterListRegistered);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Dog and Owner Registration</h1>
      <p>
        Primary owners own all the added dogs and will be notified every time a
        dog is registered for an event. Secondary owners can be customized to
        the dog and also have the ability to register a dog for an event.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
      <FieldArray2
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}

export default NestedRegistrationForm;
