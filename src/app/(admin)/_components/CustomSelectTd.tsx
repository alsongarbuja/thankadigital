"use client";

import { apiCaller } from "@/helpers/apiCaller";
import { ChangeEvent, useEffect, useState } from "react";

interface CustomSelectTdProps {
  options: string[];
  value: string;
  url: string;
  method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  keyName: string;
}

const CustomSelectTd = ({ options, value, url, method, keyName }: CustomSelectTdProps) => {
  const [selected, setSelected] = useState(value);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    const res = await apiCaller(url, method, 200, { [keyName]: e.target.value });
    if(!res.isGood) {
      console.log(res);
    }
  }

  return (
    <td>
      <select 
        className="w-full h-full px-2 py-1 border-b border-gray-200"
        value={selected}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </td>
  )
}

export default CustomSelectTd