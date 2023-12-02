"use client"

import { apiCaller } from '@/helpers/apiCaller';
import { dataToSchemaParser, schemaToDataParser } from '@/helpers/schemaParser';
import { useParams, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useRef } from 'react'
import { ChevronLeft } from 'react-feather';

type FormLayoutProps = PropsWithChildren<{
  url: string;
  method: "POST" | "PATCH";
  schema?: string[];
  param?: string;
  modelName?: string;
}>

const FormLayout = ({ children, url, method, schema, param, modelName }: FormLayoutProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const params = useParams();

  useEffect(() => {
    if(method === "PATCH" && param && modelName) {
      (async () => {
        const res = await apiCaller(`${url}/${params[param]}`)
        
        if(res.isGood) {
          const data = schemaToDataParser(res.data[modelName]);
          Object.keys(data).forEach(key => {
            const input = formRef.current?.querySelector(`[name="${key}"]`) as HTMLInputElement;
            if(input) {
              input.value = data[key];
            }
          })
        } else {
          console.log(res)
        }
      })()
    }
  }, [])
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let data = Object.fromEntries(formData.entries());

    Object.keys(data).forEach(key => {
      if(data[key] === "") {
        delete data[key];
      }
    })
    
    if(schema) {
      data = dataToSchemaParser(schema, data);
    }

    let finalUrl = url;
    if(method === "PATCH" && param) {
      finalUrl += `/${params[param]}`
    }

    const res = await apiCaller(finalUrl, method, 200, data);
    if(res.isGood) {
      if(method==="POST") {
        formRef.current?.reset();
      }
    } else {
      console.log(res)
    }
  }
  
  return (
    <form ref={formRef} className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <button className='p-2 border-2 rounded-md w-fit' type="button" onClick={()=>router.back()}><ChevronLeft /></button>
        <h3>{method==="POST"?"Create":"Edit"} {modelName}</h3>
      </div>
      {children}
      <button type="submit" className="px-4 py-2 text-white rounded-md bg-primary_red">Submit</button>
    </form>
  )
}

export default FormLayout