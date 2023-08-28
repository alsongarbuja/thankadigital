'use client';

import Select from '../../components/temporary/Select';
import Input from '../../components/temporary/Input';
import React, { useEffect, useState } from 'react'

interface userData {
  "entry.668855873": string;
  "entry.2093799469": string;
  "entry.64164442"?: string;
  "entry.148672612": string;
  "entry.331549010": string;
  "entry.703362708": string;
}

export type dynamicObject = {
  [key: string]: string;
}

const WebDevCourseRegisterPage = () => {
  
  const [data, setData] = useState<userData>({
    "entry.668855873": '',
    "entry.2093799469": '',
    "entry.64164442": '',
    "entry.148672612": '',
    "entry.331549010": '',
    "entry.703362708": '',
  })
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<dynamicObject>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if(e.target.name === "entry.2093799469") {
      setCurrentStep(1);
    }
    if(currentStep === 1 && e.target.name === "entry.148672612") {
      setCurrentStep(2);
    }
    if(currentStep === 2 && e.target.name === "entry.331549010") {
      setCurrentStep(3);
    }
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="flex flex-col-reverse lg:flex-row">
      <section className="flex flex-col items-center gap-10 justify-center w-full lg:min-h-screen lg:w-[80%] lg:border-r lg:border-gray-100">
        <h1><span className="text-primary_red">Thanka</span> <span className="text-primary_blue">Digital</span></h1>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSem27B9cJzDg_kDEX81Z-UXMx6fgN1Aok8wcA2VZ_bgd3I17w/formResponse" className="w-1/2">
          <Input 
            label="Full Name"
            type="text"
            name='entry.668855873'
            placeholder="Enter your full name"
            value={data["entry.668855873"]}
            handleChange={handleChange}
            error={error}
          />
          <Input 
            label="Email"
            type="email"
            name="entry.2093799469"
            placeholder="Enter your email"
            value={data["entry.2093799469"]}
            handleChange={handleChange}
            error={error}
          />
          <Input 
            label="Phone Number"
            type="text"
            name='entry.64164442'
            placeholder="Enter your phonenumber"
            isRequired={false}
            value={data["entry.64164442"] || ''}
            handleChange={handleChange}
            error={error}
          />
          <Select 
            label="Experience"
            name='entry.148672612'
            value={data["entry.148672612"]}
            handleChange={handleChange}
            error={error}
            options={['No Idea', 'Basic knowledge', 'Basic React', 'Basic React + Node']}
          />
          <Select 
            label="Time prefrence"
            name='entry.331549010'
            value={data["entry.331549010"]}
            handleChange={handleChange}
            error={error}
            options={['Afternoon (12:30 PM to 1:30 PM)', 'Evening (3:30 PM to 4:30 PM)']}
          />
          <Input 
            label="Queries"
            type="text"
            name='entry.703362708'
            placeholder="Enter your queries"
            value={data["entry.703362708"]}
            isRequired={false}
            handleChange={handleChange}
            error={error}
          />
          <button disabled={currentStep < 3} type="submit" className="p-4 text-white rounded-md bg-primary_blue/95 hover:bg-primary_blue disabled:bg-gray-400 disabled:cursor-not-allowed">Submit</button>
        </form>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 p-8 border-b border-gray- 00 bg-gradient-to-tr from-primary_red/60 to-primary_blue/60 lg:border-0">
        <h4>Register for the web development crash course</h4>
        <Stepper currentStep={currentStep} />
      </section>
    </main>
  )
}

const Stepper = ({ currentStep } : { currentStep: number }) => {
  const steps = [
    {
      stepIndex: 1,
      title: 'Personal Information',
      description: 'Enter the required fields to continue',
      isCompleted: false,
    },
    {
      stepIndex: 2,
      title: 'Web Development Experience',
      description: 'Select according to your experience',
      isCompleted: false,
    },
    {
      stepIndex: 3,
      title: 'Prefrences',
      description: 'Enter your prefrences to register',
      isCompleted: false,
    },
  ];

  return (
    <div className="flex flex-col justify-center mt-4 lg:flex-col">
      {steps.map((step) => (
        <div key={step.stepIndex} className={`flex flex-col mb-4 border-l ${currentStep >= step.stepIndex  ? 'border-green-600' : 'border-black'} min-h-[100px] relative`}>
          <div className={`absolute top-0 flex items-center justify-center w-10 h-10 text-white ${currentStep >= step.stepIndex ? 'bg-green-600' : 'bg-black'} rounded-full -left-5`}>
            <span>{currentStep >= step.stepIndex ? "✓" : step.stepIndex}</span>
          </div>
          <div className="pl-10">
            <h5>{step.title}</h5>
            <p className="text-sm text-white">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
    )
}

export default WebDevCourseRegisterPage