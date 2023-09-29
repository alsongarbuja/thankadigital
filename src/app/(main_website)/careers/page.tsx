import { careerList } from '../../../utils/careers'
import React from 'react'

const CareerPage = () => {
  return (
    <main className="max-w-[90%] min-h-[50vh] mx-auto">
      <h3>Career opportunities</h3>
      <p className="font-medium text-gray-500">Find about the career opportunities at thanka digital</p>
      {
        careerList.length > 0 ? (
          <>
            {
              careerList.map(career => (
                <div className="p-4 mt-8 bg-white rounded-md shadow-md" key={career.id}>
                  <h4 className="font-semibold">{career.title}</h4>
                  <p className="text-gray-500">{career.description}</p>
                  <p className="mt-4 font-medium">
                    Location: {career.location} | Type: {career.type} | Salary: {career.salary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {
                      career.skills.map((skill, index) => (
                        <span className="px-2 py-1 mr-2 rounded-md text-primary_blue bg-primary_blue bg-opacity-10" key={index}>{skill}</span>
                      ))
                    }
                  </div>
                  <a href={"#"} className="underline text-primary_blue">Apply</a>
                </div>
              ))
            }
          </>
        ) : (
          <p className="mt-12 text-center text-gray-500">No career opportunities available at this moment</p>
        )
      }
    </main>
  )
}

export default CareerPage