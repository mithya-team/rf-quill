// import { FormikProps } from "formik";
import { FC, useEffect, useRef } from "react";
import { FieldProps } from "react-forms-lite";
import {
  Editor,
  EditorProps,
  // ToolbarOptions,
} from "@mithya-team/rich-text-editor";
import clsx from "clsx";
import React from "react";
import QuillToolbar, { QuillToolbarProps } from "./QuillToolbar";
// import _ from "lodash";
import ReactQuill, { Quill } from "react-quill";
import "./index.module.scss";

export interface QuillFontSizeOption {
  label: string;
  value: string;
}

export interface RichTextEditorFieldProps extends EditorProps {
  name: string;
  label?: string;
  helperText?: string;
  sizes?: QuillFontSizeOption[];
  toolbarProps?: Omit<QuillToolbarProps, "customSizes" | "id">;
}

export interface RichTextEditorProps extends FieldProps {
  fieldProps?: RichTextEditorFieldProps;
}

export const RichTextEditor: FC<RichTextEditorProps> = (props) => {
  const {
    // fieldConfig,
    // formikProps = {} as FormikProps<unknown>,
    fieldProps = {} as RichTextEditorFieldProps,
  } = props;
  const {
    label,
    helperText,
    sizes,
    className,
    toolbarProps = {},
    name,
    ...restFieldProps
  } = fieldProps;

  useEffect(() => {
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = sizes?.map((size) => size.value) || [
      "11px",
      "14px",
      "16px",
      "20px",
      "24px",
      "34px",
    ];

    Quill.register(Size, true);
  }, [sizes]);

  const quillRef = useRef<ReactQuill | null>(null);

  // const value = _.get(formikProps, `values.${name}`) || "";

  const handleColorChange = (color: string) => {
    const quill = quillRef.current?.getEditor();
    quill?.format("color", color);
  };

  const { toolbarId } = React.useMemo(
    () => ({
      toolbarId: (name + Math.random().toString(36)).replace(/[^\w]/gi, ""),
    }),
    [name]
  );
  // const options = [
  //   ToolbarOptions.fontStyle,
  //   ToolbarOptions.quoteCode,
  //   ToolbarOptions.headers,
  //   ToolbarOptions.list,
  //   ToolbarOptions.indentation,
  //   ToolbarOptions.font,
  //   ToolbarOptions.script,
  //   ToolbarOptions.align,
  //   ToolbarOptions.clear,
  // ];
  return (
    <div className={clsx("field-container", className)}>
      {label && <span className="field-label">{label}</span>}
      <QuillToolbar
        handleColorChange={handleColorChange}
        {...toolbarProps}
        customSizes={sizes}
        id={toolbarId}
      />
      <Editor
        className={`${name}-${className}`}
        // value={value}
        // onChange={(data) => {
        //   formikProps?.setFieldValue(fieldConfig?.valueKey || "", data);
        // }}
        quillProps={{
          modules: {
            toolbar: `#${toolbarId}`,
          },
        }}
        // options={options}
        {...restFieldProps}
      />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
};

export default RichTextEditor;
