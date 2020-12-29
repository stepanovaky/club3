import React, { useCallback, useRef, useState, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./playgroundNestedFieldArray";
import { useDropzone } from "react-dropzone";
import { Form, Button } from "semantic-ui-react";

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
              <Form.Group widths="equal">
                <Form.Field>
                  <label>
                    Registered name *
                    <input
                      type="text"
                      placeholder="Registered name"
                      name={`dogs[${index}].registeredName`}
                      ref={register({ required: true })}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Call name *
                    <input
                      type="text"
                      placeholder="Call name"
                      name={`dogs[${index}].callName`}
                      ref={register({ required: true })}
                    />
                  </label>
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>
                    AKC number *
                    <input
                      type="text"
                      placeholder="AKC number"
                      name={`dogs[${index}].akcNumber`}
                      ref={register({ required: true })}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Microchip
                    <input
                      type="text"
                      placeholder="Microchip"
                      name={`dogs[${index}].microchip`}
                      ref={register()}
                    />
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Breed *
                    <input
                      type="text"
                      placeholder="Breed"
                      name={`dogs[${index}].breed`}
                      ref={register({ required: true })}
                    />
                  </label>
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>
                    DOB *
                    <input
                      type="date"
                      placeholder="DOB"
                      name={`dogs[${index}].dob`}
                      ref={register({ required: true })}
                    />
                  </label>{" "}
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>
                    Gender
                    <select
                      name={`dogs[${index}].gender`}
                      ref={register({ required: true })}
                    >
                      <option value="" disabled selected>
                        Select Gender *
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </label>
                </Form.Field>
                <Form.Field>
                  <label>
                    Registration Papers *
                    <select
                      name={`dogs[${index}].registrationPapers`}
                      ref={register}
                    >
                      <option value="" disabled selected>
                        Select Registration Papers
                      </option>
                      <option value="AKC">AKC</option>
                      <option value="NGA">NGA</option>
                      <option value="AKC ILP">AKC ILP</option>
                      <option value="Other"> Other</option>
                      <option value="None"> None added</option>
                    </select>
                  </label>
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <input
                  type="file"
                  name={`dogs[${index}].file`}
                  ref={register}
                />
              </Form.Group>{" "}
              <Button
                basic
                color="blue"
                type="button"
                onClick={() => remove(index)}
              >
                Delete Dog
              </Button>
            </li>
          );
        })}
      </ul>

      <section>
        <Button basic color="blue" type="button" onClick={addDog}>
          Add Dog
        </Button>
      </section>
    </>
  );
}
