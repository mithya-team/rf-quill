import { Formik } from "formik";
import RichTextEditor from "./lib/RichTextEditor";
import { FormConfig } from "react-forms-lite";
import React from "react";

const myFieldConfig: FormConfig = {
  type: "rte-quill",
  valueKey: "rte",
};
const fieldProps = {
  name: "name",
  label: "label",
  helperText: "helper text",
};

const initialValues = {};
const onSubmit = () => {
  return;
};
function App() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps: any) => {
        return (
          <div>
            <RichTextEditor
              fieldConfig={myFieldConfig}
              formikProps={formikProps}
              fieldProps={fieldProps}
            />
          </div>
        );
      }}
    </Formik>
  );
}

export default App;
