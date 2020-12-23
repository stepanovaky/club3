import React, { useCallback, useRef, useState, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./playgroundNestedFieldArray";
import { useDropzone } from "react-dropzone";

export default function Fields({ control, register, setValue, getValues }) {
  const [filesUploaded, setFilesUploaded] = useState([]);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dogs",
  });

  const addDog = () => {
    append({ name: "append" });
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0].name);
    setFilesUploaded(acceptedFiles[0].name);
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    rootRef,
    innerRef,
  } = useDropzone({
    onDrop,
  });
  console.log(rootRef);
  console.log(innerRef);

  useEffect(() => {
    addDog();
  }, []);

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
                <option value="Other"> Other</option>
                <option value="None"> None added</option>
              </select>

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <div className={`frame ${index}`}>
                <input
                  type="file"
                  name={`dogs[${index}].file`}
                  ref={register}
                />
                {/* <div className={`${index}`}> */}
                {/* <h5>Please include dog's Registered Name in file name</h5>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} name={`dogs[${index}].file`} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
                  {filesUploaded ? filesUploaded : null}
                </div> */}
              </div>
            </li>
          );
        })}
      </ul>

      <section>
        <button type="button" onClick={addDog}>
          Add Dog
        </button>
      </section>
    </>
  );
}
