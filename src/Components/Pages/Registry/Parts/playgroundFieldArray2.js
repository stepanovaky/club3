import React, { useCallback } from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./playgroundNestedFieldArray";
import { useDropzone } from "react-dropzone";

export default function Fields({ control, register, setValue, getValues }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dogs",
  });

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles, fields);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <NestedArray nestIndex={index} {...{ control, register }} />
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
                placeholder="AKC number"
                name={`dogs[${index}].akcNumber`}
                ref={register}
              />
              <input
                type="text"
                placeholder="Breed"
                name={`dogs[${index}].breed`}
                ref={register}
              />
              <input
                type="date"
                placeholder="DOB"
                name={`dogs[${index}].dob`}
                ref={register}
              />
              <select name={`dogs[${index}].gender`} ref={register}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select name={`dogs[${index}].registrationPapers`} ref={register}>
                <option value="AKC">AKC</option>
                <option value="NGA">NGA</option>
                <option value="AKC ILP">AKC ILP</option>
                <option value=" Other"> Other</option>
              </select>

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <div className="frame">
                <h5>Please include dog's Registered Name in file name</h5>
                <div
                  {...getRootProps({
                    refKey: getValues("dogs"),
                  })}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </div>
              </div>
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
          Add Dog
        </button>
      </section>
    </>
  );
}
