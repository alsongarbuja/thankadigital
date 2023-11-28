"use client"

import { schemaParser } from '@/helpers/schemaParser';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, useRef } from 'react'
import { ChevronLeft } from 'react-feather';

type FormLayoutProps = PropsWithChildren<{
  url: string;
  method: "POST" | "PATCH";
  schema?: string[];
}>

const FormLayout = ({ children, url, method, schema }: FormLayoutProps) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let data = Object.fromEntries(formData.entries())
    
    if(schema) {
      data = schemaParser(schema, data);
    }

    console.log(data);
    return;

    const res = await fetch(url, {
      method: method,
      body: JSON.stringify(data)
    });
    const json = await res.json();

    if(res.status === 200 || res.status === 201) {
      if(method==="POST") {
        formRef.current?.reset();
      }
    } else {
      console.log(json)
    }
  }
  
  return (
    <form ref={formRef} className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <button className='p-2 border-2 rounded-md w-fit' type="button" onClick={()=>router.back()}><ChevronLeft /></button>
      {children}
      <button type="submit" className="px-4 py-2 text-white rounded-md bg-primary_red">Submit</button>
    </form>
  )
}

export default FormLayout