"use client"

import EditorJS from '@editorjs/editorjs';

import { EDITOR_JS_TOOLS } from '@/utils/editorTools';
import React, { useEffect, useRef, useState } from 'react';

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
  const [isMounted, setIsMounted] = useState(false);
  const [data, setData] = useState(JSON.stringify(value));
  const editorCore = useRef<EditorJS | null>(null);

  const initializeEditor = async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default;
    
    if(!editorCore.current) {
      const editor = new EditorJS({
        holder: 'editor',
        tools: EDITOR_JS_TOOLS,
      });
  
      editorCore.current = editor as EditorJS;
    }
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, [])

  useEffect(() => {
    if(editorCore.current) {
      editorCore.current.isReady.then(() => {
        editorCore.current?.render(value);
      })
    }
  }, [value])

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    }
    if(isMounted) {
      init();

      return () => {
        if(editorCore.current) {
          editorCore.current.destroy();
        }
      }
    }
  }, [isMounted])

  const save = async () => {
    if(editorCore.current) {
      editorCore.current.save().then((outputData) => {
        console.log(outputData);
        
        setData(JSON.stringify(outputData));
      })
    }
  }

  return (
    <>
      <input type="text" className="opacity-0" name="body" value={data} />
      <div id="editor"></div>
      <div className="flex items-center justify-end">
        <button type="button" className="px-4 py-2 text-white rounded-md w-fit align-center bg-primary_blue" onClick={save}>
          Save Editor data
        </button>
      </div>
    </>
  )
}

export default WysiwygEditor