import { FC } from "react";
import { FieldProps } from "react-forms-lite";
import { EditorProps } from "@mithya-team/rich-text-editor";
export interface RichTextEditorFieldProps extends EditorProps {
  name: string;
  label?: string;
  helperText?: string;
}
export interface RichTextEditorProps extends FieldProps {
  fieldProps?: RichTextEditorFieldProps;
}
export declare const RichTextEditor: FC<RichTextEditorProps>;
export default RichTextEditor;
