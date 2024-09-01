"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  Info,
  MapPin,
  Monitor,
} from "react-feather";
import { motion } from "framer-motion";
import { notifications } from "@mantine/notifications";

interface ICareerListProps {
  careerList: CareerModel[];
}

const CareerList = ({ careerList }: ICareerListProps) => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerModel | null>(
    null
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const attachmentRef = useRef<HTMLInputElement>(null);

  const handleApplyModel = (career: CareerModel) => {
    setSelectedCareer(career);
    setIsApplyOpen(true);
  };

  const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameRef.current?.value &&
      phoneRef.current?.value &&
      linkRef.current?.value
    ) {
      try {
        const formData = new FormData();
        formData.append("fullname", nameRef.current?.value ?? "");
        formData.append("phone", phoneRef.current?.value ?? "");
        formData.append("email", emailRef.current?.value ?? "");
        formData.append("portfolio", linkRef.current?.value ?? "");
        formData.append("query", queryRef.current?.value ?? "");
        formData.append("position", selectedCareer?.title ?? "");
        formData.append("attachment", attachmentRef.current?.files?.[0] ?? "");

        const res = await fetch("/api/career", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();

        if (data.status === 200) {
          notifications.show({
            title: "Message sent",
            message:
              "Thank you for showing interest in the position. We will get back to you as soon as possible.",
            color: "teal",
          });
        } else {
          notifications.show({
            title: "Message not sent",
            message: "Sorry, something went wrong. Please try again later.",
            color: "red",
          });
        }
      } catch (error) {
        notifications.show({
          title: "Message not sent",
          message: "Sorry, something went wrong. Please try again later.",
          color: "red",
        });
        console.error(error);
      }
    }
  };

  return (
    <>
      {careerList.length > 0 ? (
        <div className="flex flex-col gap-12 mt-8">
          {careerList.map((career) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="pb-4 border-b border-gray-200"
              key={career._id}
            >
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div>
                  <h3 className="font-semibold">{career.title}</h3>
                  <p className="text-gray-500">{career.description}</p>
                </div>
                <p
                  onClick={() => handleApplyModel(career)}
                  className="flex items-center text-xl font-medium underline cursor-pointer underline-offset-4"
                >
                  Apply <ArrowUpRight />
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <p className="flex items-center gap-2 px-4 py-1 text-sm border rounded-full border-neutral_black">
                  <MapPin className="w-4 h-4" /> {career.location}
                </p>
                <p className="flex items-center gap-2 px-4 py-1 text-sm border rounded-full border-neutral_black">
                  <Info className="w-4 h-4" /> {career.type}
                </p>
                {career.salary !== "" && (
                  <p className="flex items-center gap-2 px-4 py-1 text-sm border rounded-full border-neutral_black">
                    <DollarSign className="w-4 h-4" /> {career.salary}
                  </p>
                )}
                {career.time !== "" && (
                  <p className="flex items-center gap-2 px-4 py-1 text-sm border rounded-full border-neutral_black">
                    <Clock className="w-4 h-4" /> {career.time}
                  </p>
                )}
                {career.experience !== "" && (
                  <p className="flex items-center gap-2 px-4 py-1 text-sm border rounded-full border-neutral_black">
                    <Monitor className="w-4 h-4" /> {career.experience}
                  </p>
                )}
              </div>
              {/* <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {career.skills.map((skill, index) => (
                  <span
                    className="px-2 py-1 mr-2 rounded-md text-primary_blue bg-primary_blue bg-opacity-10"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="mt-12 font-medium text-center text-gray-600">
          No career opportunities available at this moment
        </p>
      )}
      {isApplyOpen && (
        <div
          className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/70"
          onClick={() => setIsApplyOpen(false)}
        >
          <div
            className="fixed w-11/12 p-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md lg:w-1/2 top-1/2 left-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <h4>Apply For {selectedCareer?.title}</h4>
            <p>{selectedCareer?.description}</p>
            <form
              onSubmit={handleSendMail}
              className="flex flex-col gap-4"
              encType="multipart/form-data"
            >
              <input
                ref={nameRef}
                className="p-2 border border-gray-200 rounded-md"
                required
                type="text"
                placeholder="Full name"
              />
              <input
                ref={emailRef}
                className="p-2 border border-gray-200 rounded-md"
                required
                type="email"
                placeholder="Email"
              />
              <input
                ref={phoneRef}
                className="p-2 border border-gray-200 rounded-md"
                required
                type="number"
                placeholder="Phone number"
              />
              <input
                ref={linkRef}
                className="p-2 border border-gray-200 rounded-md"
                required
                type="text"
                placeholder="Porfolio Website / Github Link / Dribbble Link"
              />
              <input
                ref={queryRef}
                className="p-2 border border-gray-200 rounded-md"
                type="text"
                placeholder="Any queries"
              />
              <p className="text-sm text-gray-500">
                *Please attach your resume in PDF format
              </p>
              <input
                ref={attachmentRef}
                className="p-2 border border-gray-200 rounded-md"
                required
                type="file"
                accept=".pdf"
                placeholder="Add your resume"
              />
              <button
                type="submit"
                className="p-4 text-center text-white rounded-sm bg-primary_blue"
              >
                Send Mail
              </button>
              <button
                type="button"
                onClick={() => setIsApplyOpen(false)}
                className="p-4 text-center text-white rounded-sm bg-primary_red"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerList;
