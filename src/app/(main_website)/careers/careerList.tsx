"use client";

import { useRef, useState } from "react";

interface ICareerListProps {
  careerList: CareerModel[];
}

const CareerList = ({ careerList }: ICareerListProps) => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerModel | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const cvRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);

  const handleApplyModel = (career: CareerModel) => {
    setSelectedCareer(career);
    setIsApplyOpen(true);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      careerId: selectedCareer?.identifier,
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      link: linkRef.current?.value,
      query: queryRef.current?.value,
      cv: cvRef.current?.files?.[0]
    }
    const res = await fetch("https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/careerApplications/applications", {
      method: "POST",
      body: JSON.stringify({
        "application": data
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SHEETY_API_APPLY_AUTHORIZATION}`
      }
    })
    const response = await res.json();
    if(res.status === 200) {
      alert("Successfully applied for the job");
      setIsApplyOpen(false);
    } else {
      console.error(response);
      alert("Something went wrong. Please try again later");
    }
  }
  
  return (
    <>
      {
        careerList.length > 0 ? (
          <>
            {
              careerList.map(career => (
                <div className="p-4 mt-8 bg-white rounded-md shadow-md" key={career.identifier}>
                  <h4 className="font-semibold">{career.title}</h4>
                  <p className="text-gray-500">{career.description}</p>
                  <p className="mt-4 font-medium">Location: {career.location}</p>
                  <p className="font-medium">Type: {career.type}</p>
                  {career.salary !== "-" && <p className="font-medium">Salary: {career.salary}</p>}
                  {career.time !== "-" && <p className="font-medium">Time Period: {career.time}</p>}
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {
                      career.skills.map((skill, index) => (
                        <span className="px-2 py-1 mr-2 rounded-md text-primary_blue bg-primary_blue bg-opacity-10" key={index}>{skill}</span>
                      ))
                    }
                  </div>
                  <span onClick={()=>handleApplyModel(career)} className="cursor-pointer underline text-primary_blue">Apply</span>
                </div>
              ))
            }
          </>
        ) : (
          <p className="mt-12 text-center text-gray-500">No career opportunities available at this moment</p>
        )
      }
      {
        isApplyOpen && (
          <div className="fixed z-10 w-screen h-screen bg-black/70 top-0 left-0" onClick={()=>setIsApplyOpen(false)}>
            <div className="fixed bg-white rounded-md w-1/2 p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" onClick={(e) => e.stopPropagation()}>
              <h4>Apply For {selectedCareer?.title}</h4>
              <p className="mb-4">{selectedCareer?.description}</p>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} encType="multipart/form-data">
                <input ref={nameRef} className="p-2 border border-gray-200 rounded-md" required type="text" placeholder="Full name" />
                <input ref={emailRef} className="p-2 border border-gray-200 rounded-md" required type="email" placeholder="Email" />
                <input ref={phoneRef} className="p-2 border border-gray-200 rounded-md" required type="number" placeholder="Phone number" />
                <input ref={linkRef} className="p-2 border border-gray-200 rounded-md" required type="text" placeholder="Porfolio Website / Github Link / Dribbble Link" />
                <input ref={queryRef} className="p-2 border border-gray-200 rounded-md" type="text" placeholder="Any queries" />
                <div className="flex gap-2">
                  <label htmlFor="">CV: *</label>
                  <input ref={cvRef} className="p-2 border border-gray-200 rounded-md" required type="file" placeholder="CV" />
                </div>
                <button type="submit" className="bg-primary_blue p-4 text-white rounded-sm">Apply</button>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CareerList