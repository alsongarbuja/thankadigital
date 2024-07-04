"use client";
import Input from "@/components/global/Input";
import { useState } from "react";

type ContactDetail = {
  fullname: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [detail, setDetail] = useState<ContactDetail>({
    fullname: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState({
    isSent: false,
    isSuccess: false,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });
      const data = await res.json();

      if (data.status === 200) {
        setDetail({
          fullname: "",
          email: "",
          message: "",
        });
        setSent({
          isSent: true,
          isSuccess: true,
        });
      } else {
        setSent({
          isSent: true,
          isSuccess: false,
        });
      }
    } catch (error) {
      setSent((prev) => ({ ...prev, isSent: true, isSuccess: false }));
      console.log(error);
    }
    setTimeout(() => {
      setSent((prev) => ({ ...prev, isSent: false }));
    }, 5000);
    setIsSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end">
      {sent.isSent && (
        <div
          className={`w-full text-center ${
            sent.isSuccess ? "bg-green-500" : "bg-red-500"
          } text-white p-2 py-4 rounded-md`}
        >
          <p className="font-semibold">
            {sent.isSuccess
              ? "Thank you for contacting us. We will get back to you as soon as possible."
              : "Sorry, something went wrong. Please try again later."}
          </p>
        </div>
      )}
      <Input
        label="Full Name"
        name="fullname"
        handleChange={handleChange}
        placeholder="Please Enter your full name"
        value={detail.fullname}
        crrField="fullname"
        error={{}}
      />
      <Input
        label="Email"
        name="email"
        handleChange={handleChange}
        placeholder="Please Enter your email"
        value={detail.email}
        crrField="email"
        error={{}}
      />
      <Input
        label="Message"
        name="message"
        handleChange={handleChange}
        placeholder="Please Enter your message"
        value={detail.message}
        crrField="message"
        error={{}}
      />
      <button
        type="submit"
        className={`bg-primary_blue text-white w-full mt-2 p-3 rounded-md ${
          isSending && "bg-primary_blue/40 cursor-not-allowed"
        }`}
        disabled={isSending}
      >
        {isSending ? "Messaging..." : "Message"}
      </button>
    </form>
  );
};

export default ContactForm;
