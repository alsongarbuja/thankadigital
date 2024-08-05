"use client";
import Input from "@/components/global/Input";
import { notifications } from "@mantine/notifications";
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
        notifications.show({
          title: "Message sent",
          message:
            "Thank you for contacting us. We will get back to you as soon as possible.",
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
    setIsSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end">
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
        label="Email / Phone"
        name="email"
        handleChange={handleChange}
        placeholder="Enter email or Phone number"
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
