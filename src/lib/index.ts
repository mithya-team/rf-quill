export * from "./RichTextEditor";
import React from "react";
import { attachField } from "react-forms-lite";
import RichTextEditor from "./RichTextEditor";

const rteElement = React.createElement(RichTextEditor, {});
attachField("rte-quill", rteElement);
