import { FormikProps } from "formik";
import _ from "lodash";
import React, { FC, useEffect, useRef } from "react";
import { FieldProps, getFieldError, HelperText } from "react-forms-lite";
import {
  Editor,
  ToolbarOptions,
  EditorProps,
} from "@mithya-team/rich-text-editor";
import clsx from "clsx";
import "./index.module.scss";


export interface RFReactQuillFieldProps extends EditorProps {
  name: string;
  label: string;
  helperText: string;

  imageUploader?: ((file: File) => Promise<string>) | null | undefined;
  ImageUploadHandler?: React.FC<{ onFinish: (url: string) => void }> | null;
  AddEmbedHandler?: React.FC<{
    onFinish: (embedObject: Object) => void;
  }> | null;
  EmbedPlaceholder?: React.FC | null;
  options?: ToolbarOptions[] | null | undefined;
  customTag?: string;
  className?: string;
  onChange?: ((value: string) => void) | undefined;
}

export interface RFReactQuillProps extends FieldProps {
  fieldProps?: RFReactQuillFieldProps;
}

const RFReactQuill: FC<RFReactQuillProps> = (props) => {
  const {
    fieldConfig,
    formikProps = {} as FormikProps<any>,
    fieldProps = {} as RFReactQuillFieldProps,
  } = props;
  const {
    name,
    label,
    helperText,

    quillProps = null,
    imageUploader = null,
    ImageUploadHandler = null,
    AddEmbedHandler = null,
    EmbedPlaceholder = null,
    options = null,
    customTag = "default",
    className = "editor-main",
    onChange,
    ...restFieldProps
  } = fieldProps;

  const value = _.get(formikProps, `values.${name}`) || "";
  const errorText = getFieldError(name, formikProps);


  return (
    <div className={clsx("field-container", className)}>
      {label && <span className="field-label">{label}</span>}

      <Editor 
      className={`${name}_${className}`} 
      />

      <HelperText fieldProps={fieldProps} formikProps={formikProps} />
    </div>
  );
};

export default RFReactQuill;

