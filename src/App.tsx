import React from "react";
import { RichTextEditor } from "./lib/index";
import { ReactForm, attachField } from "react-forms-lite";
attachField("rte-quill", <RichTextEditor />);

function App() {
  const myConfig = [
    {
      type: "text",
      valueKey: "fName",
      fieldProps: {
        label: "First Name",
        placeholder: "Enter First Name",
        helperText: "Please fill your first name",
      },
    },
    {
      type: "rte-quill",
      valueKey: "rte",
      fieldProps: {
        name: "name",
        label: "label",
        helperText: "helper text",
      },
    },
  ];
  return (
    <div className="App">
      <ReactForm
        config={myConfig}
        formId="1"
        initialValues={{}}
        // actionConfig={{ submitButtonLayout: "fullWidth" }}
        onSubmit={(values: object) => {
          // setLoading(true);
          console.log(values);
          // setTimeout(() => setLoading(false), 200);
        }}
      />
      {/* <RichTextEditor /> */}
    </div>
  );
}
export default App;
