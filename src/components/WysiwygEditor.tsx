"use client"

import EditorJS from '@editorjs/editorjs';

import { EDITOR_JS_TOOLS } from '@/utils/editorTools';
import React, { useEffect, useRef, useState } from 'react';

type WysiwygEditorProps = {
  value: EditorBlockValue;
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
        onChange: () => {
          save();
        }
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
      let data = value;
      if(value.blocks.length === 0) {
        data = {
          ...data,
          blocks: [
            {
              type: "paragraph",
              data: {
                text: ""
              }
            }
          ]
        };
      }
      editorCore.current.isReady.then(() => {
        editorCore.current?.render(data);
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
      <input type="text" className="opacity-0" name="body" value={data} onChange={()=>{}} />
      <div id="editor"></div>
    </>
  )
}

export default WysiwygEditor