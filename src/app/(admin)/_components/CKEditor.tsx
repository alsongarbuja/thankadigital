"use client";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Undo,
  Heading,
  List,
  BlockQuote,
  Table,
  Link,
  Strikethrough,
  Indent,
  Subscript,
  Superscript,
  Font,
} from "ckeditor5";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "ckeditor5/ckeditor5.css";
import "@/styles/ck.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface ICkEditorProps {
  data: string;
  label: string;
}

const CkEditor = forwardRef(({ data, label }: ICkEditorProps, ref) => {
  const ckRef = useRef<CKEditor<ClassicEditor>>(null);

  useImperativeHandle(ref, () => ({
    getData: () => {
      if (ckRef.current) {
        return ckRef.current.editor?.getData();
      }
    },
  }));

  return (
    <div className="">
      <label htmlFor={"ckEditor"} className="font-semibold">
        {label}
      </label>
      <CKEditor
        ref={ckRef}
        data={data}
        id={"ckEditor"}
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "undo",
              "redo",
              "|",
              "heading",
              "|",
              "bold",
              "italic",
              "strikethrough",
              "subscript",
              "superscript",
              "|",
              "fontfamily",
              "fontsize",
              "fontColor",
              "fontBackgroundColor",
              "|",
              "link",
              "blockQuote",
              "insertTable",
              "|",
              "bulletedList",
              "numberedList",
              "outdent",
              "indent",
            ],
          },
          // plugins
          plugins: [
            Essentials,
            Bold,
            Italic,
            Paragraph,
            Undo,
            Heading,
            List,
            BlockQuote,
            Table,
            Link,
            Strikethrough,
            Indent,
            Subscript,
            Superscript,
            Font,
          ],
          // initialData: data,
        }}
      />
    </div>
  );
});

CkEditor.displayName = "CkEditor";
export default CkEditor;
