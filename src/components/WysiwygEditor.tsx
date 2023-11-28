"use client"

import { createReactEditorJS } from 'react-editor-js';
const ReactEditorJS = createReactEditorJS();

import { EDITOR_JS_TOOLS } from '@/utils/editorTools';
import React from 'react';

type WysiwygEditorProps = {
  value: {
    time?: number;
    blocks: {
      type: string;
      data: {
        text: string;
        level?: number;
      };
    }[];
    version?: string;
  };
}

const WysiwygEditor = ({ value }: WysiwygEditorProps) => {
  const editorCore = React.useRef(null)

  const handleInitialize = React.useCallback((instance: any) => {
    editorCore.current = instance
  }, [])

  return (
    <>
      <ReactEditorJS 
        defaultValue={value} 
        onInitialize={handleInitialize}
        holder='editor'
        minHeight={500}
        tools={EDITOR_JS_TOOLS}
      />
    </>
  )
}

export default WysiwygEditor