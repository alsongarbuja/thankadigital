import React from 'react'

type AdminInputProps = {
  label?: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}

const AdminInput = (props: AdminInputProps) => {
  return (
    <label>
      <span className="block mb-2">{props.label}</span>
      <input 
        required={props.required||true} 
        type={props.type||"text"} 
        name={props.name} 
        placeholder={props.placeholder} 
        className="w-full p-2 border-2 border-gray-300 rounded-md" 
      />
    </label>
  )
}

export default AdminInput