import { FC } from "react";
import { FieldProps } from "react-forms-lite";
import { EditorProps } from "@mithya-team/rich-text-editor";
import { QuillToolbarProps } from "./QuillToolbar";
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
export declare const RichTextEditor: FC<RichTextEditorProps>;
export default RichTextEditor;
