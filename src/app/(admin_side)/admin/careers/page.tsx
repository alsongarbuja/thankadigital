import Link from 'next/link'
import React from 'react'
import CustomTable from '../../_components/CustomTable'
import { getCareers } from '@/server/controllers/career.controller';
import ActionTd from '../../_components/ActionTd';
import CustomSelectTd from '../../_components/CustomSelectTd';

const CareerPage = async () => {
  const careers = await getCareers("all");

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Careers</h3>
        <Link href="/admin/careers/create" className="px-4 py-2 text-white rounded-md bg-primary_red">Add Career</Link>
      </div>
      <CustomTable 
        cols={["TITLE", "SALARY", "LOCATION", "type", "status"]}
      >
        {careers.map((career, index) => (
          <tr key={index} className="border-b-2 border-gray-700">
            <td className="h-12 text-left">{career.title}</td>
            <td className="h-12 text-left">{career.salary}</td>
            <td className="h-12 text-left">{career.location}</td>
            <td className="h-12 text-left">{career.type}</td>
            <CustomSelectTd 
              options={["draft", "published", "archieved"]}
              value={career.status}
              url={`/api/admin/career/${career.id}`}
              method="PATCH"
              keyName="status"
            />
            <ActionTd 
              editUrl={`/admin/careers/edit/${career.id}`}
              deleteUrl={`/api/admin/career/${career.id}`}
            />
          </tr>
        ))}
      </CustomTable>
    </>
  )
}

export default CareerPage