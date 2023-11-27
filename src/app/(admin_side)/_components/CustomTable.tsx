"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

type CustomTableProps = {
  url: string;
  keys: string[];
  pathUrl: string;
}

const CustomTable = ({ url, keys, pathUrl }: CustomTableProps) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const handleDelete = async (id: string) => {
    if(window.confirm("Are you sure you want to delete this data?") === false) return

    const res = await fetch(`${url}/${id}`, {
      method: "DELETE"
    })
    const json = await res.json()
    if(res.status === 200) {
      window.location.reload()
    } else {
      console.log(json, res);
    }
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data[pathUrl]))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return loading ? (
    <div className="w-full h-full">
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-full h-12 bg-gray-500 rounded-md animate-pulse"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="block w-[96%] h-10 mx-auto my-5 bg-gray-300 rounded-sm animate-pulse"></td>
          </tr>
          <tr>
            <td className="block w-[96%] h-10 mx-auto my-5 bg-gray-300 rounded-sm animate-pulse"></td>
          </tr>
          <tr>
            <td className="block w-[96%] h-10 mx-auto my-5 bg-gray-300 rounded-sm animate-pulse"></td>
          </tr>
          <tr>
            <td className="block w-[96%] h-10 mx-auto my-5 bg-gray-300 rounded-sm animate-pulse"></td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-gray-700">
          {keys.map((key, index) => (
            <th key={index} className="h-12 text-center">{key}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d: dynamicObject, index) => {
          const newData = Object.fromEntries(Object.entries(d).filter(([key]) => keys.includes(key)))
          return (
            <tr key={index} className="border-b-2 border-gray-200">
              {Object.values(newData).map((value: any, index) => (
                <td key={index} className="h-24 text-center">{value}</td>
              ))}
              <td className="flex items-center justify-center h-24 gap-4">
                <Link href={`/admin/${pathUrl}/edit/${d.id||d._id}`} className="font-semibold text-primary_blue">Edit</Link>
                <button className="font-semibold text-primary_red" onClick={()=>handleDelete(d.id||d._id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default CustomTable