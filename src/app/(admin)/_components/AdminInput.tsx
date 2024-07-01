import React from 'react'

type AdminInputProps = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const AdminInput = ({ label, name, type="text", placeholder="", required=true }: AdminInputProps) => {
  return (
    <label>
      <span className="block mb-2">{label}</span>
      <input 
        required={required} 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        className="w-full p-2 border-2 border-gray-300 rounded-md" 
      />
    </label>
  )
}

export default AdminInput