import { FormikProps } from "formik";
import { FC } from "react";
import { FieldProps, HelperText } from "react-forms-lite";
import { Editor, EditorProps } from "@mithya-team/rich-text-editor";
import clsx from "clsx";
import React from "react";

export interface RichTextEditorFieldProps extends EditorProps {
  name: string;
  label?: string;
  helperText?: string;
}

export interface RichTextEditorProps extends FieldProps {
  fieldProps?: RichTextEditorFieldProps;
}

export const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const {
    formikProps = {} as FormikProps<unknown>,
    fieldProps = {} as RichTextEditorFieldProps,
  } = props;
  const { label, name, className } = fieldProps;

  return (
    <div className={clsx("field-container", className)}>
      {label && <span className="field-label">{label}</span>}

      <Editor className={`${name}_${className}`} />

      <HelperText fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};

export default RichTextEditor;
