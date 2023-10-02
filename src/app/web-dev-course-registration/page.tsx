'use client';
import React, { useEffect, useState } from 'react';

import Select from '@/components/global/Select';
import Input from '@/components/global/Input';

interface userData {
  "entry.668855873": string;
  "entry.2093799469": string;
  "entry.64164442": string;
  "entry.148672612": string;
  "entry.331549010": string;
  "entry.703362708": string;
}

const WebDevCourseRegisterPage = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [hasResponse, setHasResponse] = useState(true);
  const [data, setData] = useState<userData>({
    "entry.668855873": '',
    "entry.2093799469": '',
    "entry.64164442": '',
    "entry.148672612": 'No Idea',
    "entry.331549010": 'Afternoon (12:30 PM to 1:30 PM)',
    "entry.703362708": '',
  })
  const [currentStep, setCurrentStep] = useState(0);
  const [currentField, setCurrentField] = useState('entry.668855873' as keyof userData);
  const [error, setError] = useState<dynamicObject>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleContinue = () => {
    if(data["entry.668855873"] === "" || data["entry.2093799469"] === "" || data["entry.148672612"] === "" || data["entry.331549010"] === "" || data["entry.64164442"] === "") {
      setError(prev => ({ ...prev, [currentField]: "This field is required" }))
    }
    if(currentField === "entry.668855873" && data["entry.668855873"] !== "") {
      setCurrentField("entry.2093799469");
    } 
    if(currentField === "entry.2093799469" && data["entry.2093799469"] !== "") {
      setCurrentField("entry.64164442");
    }
    if(currentField === "entry.64164442" && data["entry.64164442"] !== "") {
      setCurrentField("entry.148672612");
      setCurrentStep(1);
    }
    if(currentField === "entry.148672612" && data["entry.148672612"] !== "") {
      setCurrentField("entry.331549010");
      setCurrentStep(2);
    }
    if(currentField === "entry.331549010" && data["entry.331549010"] !== "") {
      setCurrentField("entry.703362708");
    }
    if(currentField === "entry.703362708") {
      setCurrentStep(3);
    }
    // if(currentStep === 3) {
    //   setCurrentStep(4);
    // }
  }

  useEffect(() => {
    const data = localStorage.getItem("thankadigital-web-course-registration");
    if(!data) {
      setHasResponse(false);
    }
    const restrictInspect = (e: KeyboardEvent) => {
      if(e.shiftKey && e.ctrlKey && e.key === 'I') {
        e.preventDefault();
      }
      if(e.ctrlKey && e.shiftKey && e.key === 'R') {
        localStorage.removeItem("thankadigital-web-course-registration");
      }
    }
    const restrictInspectFromContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    }
    window.addEventListener('keydown', restrictInspect);
    window.addEventListener('contextmenu', restrictInspectFromContextMenu);
    return () => {
      window.removeEventListener('keydown', restrictInspect);
      window.removeEventListener('contextmenu', restrictInspectFromContextMenu);
    }
  }, [])

  useEffect(() => {
    if(currentField === "entry.703362708") {
      localStorage.setItem("thankadigital-web-course-registration", JSON.stringify(data));
    }
  }, [currentField])

  return (
    <>
      {
        isFirstOpen && (
          <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-screen bg-black/50">
            <div className="w-[90%] lg:w-1/2 h-[80%] overflow-y-scroll px-6 py-10 bg-white rounded-md">
              <h3>Welcome to Thanka digital web development crash course</h3>
              <p className="italic font-bold text-red-500">Note: Read all of this before continue</p>
              <p className="my-2">
                Discover the comprehensive web development crash course offered by Thanka Digital at the convenient Fulbari 11 location. Designed to empower your skills, this 40-day program focuses on the dynamic MERN stack technology. MERN stack is one of the tech stack used in the web development community with its dynamic nature and easy to configure and use.
                <br />
                Topics you will learn:
              </p>
              <ol className="pl-8 list-decimal">
                <li>HTML and CSS refreshment</li>
                <li>JS refreshment</li>
                <li>React Basic (components, JSX, Virtual DOM, props, etc)</li>
                <li>React indepth (hooks, state management, HOC, Routing, custom hooks, forms, etc)</li>
                <li>Node Basic (CommonJS syntax, fs, backend development)</li>
                <li>Express (server using express, middlewears, error handling, API creation, etc)</li>
                <li>MongoDB (NOSQL concepts, Document and collections, moongose, database connections, etc)</li>
              </ol>
              <div className="mt-4">
                <b>Location:</b> Fulbari 11 <br />
                <b>Time Slots:</b> <br />
                <ul className='pl-8 list-disc'>
                  <li>Afternoon: 12:30 PM to 1:30 PM</li>
                  <li>Evening: 3:30 PM to 4:30 PM</li>
                </ul>
              </div>
              <p className='my-4'>
                Join us on this journey of learning and growth for a nominal fee of NPRS 14000, and unlock the potential to create impactful web solutions.
              </p>

              <button onClick={()=>setIsFirstOpen(false)} className="p-2 text-green-500 bg-green-200 rounded-md">Continue</button>
            </div>
          </div>
        )
      }
      {
        !isFirstOpen && hasResponse && (
          <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-screen bg-black/50">
            <div className="w-[90%] lg:w-1/2 px-6 py-10 bg-white rounded-md">
              <h3>You have already registered for the course</h3>
              <p className="my-2">
                If you want to update your register, please contact us at <a href="mailto:thankadigital@gmail.com" className="font-bold underline text-primary_blue">thankadigital@gmail.com</a>
              </p>
            </div>
          </div>
        )
      }
      <main className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-10">
        <h1><span className="text-primary_red">Thanka</span> <span className="text-primary_blue">Digital</span></h1>
        
        <h4>Register for the web development crash course</h4>
        <Stepper currentStep={currentStep} />

        <form action="https://docs.google.com/forms/d/e/1FAIpQLSem27B9cJzDg_kDEX81Z-UXMx6fgN1Aok8wcA2VZ_bgd3I17w/formResponse" className='w-[80%]'>
          <Input 
            label="Full Name"
            type="text"
            name='entry.668855873'
            placeholder="Enter your full name"
            value={data["entry.668855873"]}
            handleChange={handleChange}
            error={error}
            crrField={currentField}
          />
          <Input 
            label="Email"
            type="email"
            name="entry.2093799469"
            placeholder="Enter your email"
            value={data["entry.2093799469"]}
            handleChange={handleChange}
            error={error}
            crrField={currentField}
          />
          <Input 
            label="Phone Number"
            type="text"
            name='entry.64164442'
            placeholder="Enter your phonenumber"
            value={data["entry.64164442"]}
            handleChange={handleChange}
            error={error}
            crrField={currentField}
          />
          <Select 
            label="Experience"
            name='entry.148672612'
            value={data["entry.148672612"]}
            handleChange={handleChange}
            error={error}
            crrField={currentField}
            options={['No Idea', 'Basic Knowledge', 'Basic React', 'Basic React + Node']}
          />
          <Select 
            label="Time prefrence"
            name='entry.331549010'
            value={data["entry.331549010"]}
            handleChange={handleChange}
            error={error}
            crrField={currentField}
            options={['Afternoon (12:30 PM to 1:30 PM)', 'Evening (3:30 PM to 4:30 PM)']}
          />
          <Input 
            label="Queries"
            type="text"
            name='entry.703362708'
            placeholder="Enter your queries"
            value={data["entry.703362708"]}
            isRequired={false}
            crrField={currentField}
            handleChange={handleChange}
            error={error}
          />
          <button 
            type={currentStep < 3 ? "button": "submit"} 
            className="p-4 text-white rounded-md bg-primary_blue/95 hover:bg-primary_blue disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={currentStep < 3 ? handleContinue : ()=>{}}
            disabled={currentStep > 3}
          >
            {currentStep < 2 ? 'Continue' : 'Submit'}
          </button>
        </form>
      </main>
    </>
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
      title: 'Web Dev Experience',
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
    <div className="flex justify-center">
      {steps.map((step) => (
        <div key={step.stepIndex} className={`flex flex-col justify-center mb-4 border-t ${currentStep >= step.stepIndex  ? 'border-green-600' : 'border-black'} min-h-[100px] relative`}>
          <div className={`absolute -top-5 flex items-center justify-center w-10 h-10 text-white ${currentStep >= step.stepIndex ? 'bg-green-600' : 'bg-black'} rounded-full left-1/2 -translate-x-1/2`}>
            <span>{currentStep >= step.stepIndex ? "✓" : step.stepIndex}</span>
          </div>
          <div className="px-2 pt-10 text-center lg:px-10">
            <h6>{step.title}</h6>
            {/* <p className="text-sm text-gray-500">{step.description}</p> */}
          </div>
        </div>
      ))}
    </div>
    )
}

export default WebDevCourseRegisterPage