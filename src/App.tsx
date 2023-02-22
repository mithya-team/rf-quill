import { Formik } from "formik";
import "./App.css";
import RichTextEditor from "./RichTextEditor";
import { FormConfig } from "react-forms-lite";

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
