import React from "react";
import { attachField } from "react-forms-lite";
import RichTextEditor from "./RichTextEditor";
export * from "./RichTextEditor";

attachField("rte-quill", <RichTextEditor />);
