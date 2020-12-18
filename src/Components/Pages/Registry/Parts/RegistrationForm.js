import React from "react";
import { Formik, Form, Field, FieldArray, FormikConsumer } from "formik";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.

const RegistrationForm = () => {
  <div>
    <Formik
      initialValues={{ owners: [""] }}
      onSubmit={(values) => console.log(values)}
    >
      render=
      {({ values }) => (
        <Form>
          <FieldArray
            name="owners"
            render={(arrayHelpers) => (
              <div>
                {values.owners &&
                  values.owners.length >
                    0(
                      values.owners.map((owner, index) => (
                        <div key={index}>
                          <Field name={`owners.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            -
                          </button>
                        </div>
                      ))
                    )(
                      <button
                        type="button"
                        onClick={() => arrayHelpers.push("")}
                      >
                        add
                      </button>
                    )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    </Formik>
  </div>;
};

export default RegistrationForm;
