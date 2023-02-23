import React from "react";
import { QuillFontSizeOption } from "./RichTextEditor";
type ToolbarOption = "size" | "color" | "image" | "align" | "indents" | "lists";
export interface QuillToolbarProps {
    id: string;
    handleColorChange: (color: string) => void;
    toolbarOptions?: ToolbarOption[];
    customSizes?: QuillFontSizeOption[];
    formats?: QuillFormat[];
}
declare const QuillToolbar: React.FC<QuillToolbarProps>;
export declare const defaultFormats: string[];
export default QuillToolbar;
export type QuillFormat = "header" | "image" | "bold" | "italic" | "underline" | "strike" | "indent" | "link" | "image" | "color" | "script" | "font" | "align" | "direction" | "size" | "list" | "blockquote" | "code-block";
export declare const QUILL_FORMATS: QuillFormat[];
