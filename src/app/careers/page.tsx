import { careerList } from '../../utils/careers'
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
                <div className="mt-8 bg-white shadow-md p-4 rounded-md" key={career.id}>
                  <h4 className="font-semibold">{career.title}</h4>
                  <p className="text-gray-500">{career.description}</p>
                  <p className="font-medium mt-4">
                    Location: {career.location} | Type: {career.type} | Salary: {career.salary}
                  </p>
                  <div className="mt-2 mb-4 flex flex-wrap gap-2">
                    {
                      career.skills.map((skill, index) => (
                        <span className="text-primary_blue bg-primary_blue bg-opacity-10 px-2 py-1 rounded-md mr-2" key={index}>{skill}</span>
                      ))
                    }
                  </div>
                  <a href={"#"} className="text-primary_blue underline">Apply</a>
                </div>
              ))
            }
          </>
        ) : (
          <p className="text-gray-500 text-center mt-12">No career opportunities available at this moment</p>
        )
      }
    </main>
  )
}

export default CareerPage