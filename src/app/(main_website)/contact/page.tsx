"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Facebook, Instagram, Linkedin, Mail, Phone } from "react-feather";

import Input from "@/components/global/Input";

type ContactDetail = {
  fullname: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const router = useRouter();
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  }

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
  }
  
  return (
    <>
      <button className="p-2 mb-4 border rounded-md" onClick={()=>router.back()}>
        <ArrowLeft />
      </button>
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-end px-10 py-4 border rounded-md">
        {sent.isSent && (
          <div className={`w-full text-center ${sent.isSuccess ? "bg-green-500" : "bg-red-500"} text-white p-2 py-4 rounded-md`}>
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
        <button type="submit" className={`bg-primary_blue text-white p-4 rounded-md ${isSending && 'bg-primary_blue/40 cursor-not-allowed'}`} disabled={isSending}>
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
      <section className="mt-8">
        <h4>Connect With Us</h4>
        <p>Follow us on social media</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link href="https://www.facebook.com/thankadigital1" className="flex gap-2 items-center bg-[#1877f2] py-2 px-4 rounded-sm text-white">
            <Facebook /> Facebook
          </Link>
          <Link href="https://www.instagram.com/thanka.digital" className="flex gap-2 items-center bg-gradient-to-l to-[#c13584] via-[#f56040] from-[#ffdc80] py-2 px-4 rounded-sm text-white">
            <Instagram /> Instagram
          </Link>
          <Link href="https://www.linkedin.com/company/thanka-digital" className="flex gap-2 items-center bg-[#0a66c2] py-2 px-4 rounded-sm text-white">
            <Linkedin /> Linkedin
          </Link>
        </div>
        <p className="mt-4">Direct Contact</p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link href="tel:+9779825140802" className="flex gap-2 items-center bg-[#00c16e] py-2 px-4 rounded-sm text-white">
            <Phone /> 9825140802
          </Link>
          <Link href="tel:+9779866011579" className="flex gap-2 items-center bg-[#00c16e] py-2 px-4 rounded-sm text-white">
            <Phone /> 9866011579
          </Link>
          <Link href="mailto:thankadigital@gmail.com" className="flex gap-2 items-center bg-[#4285f4] py-2 px-4 rounded-sm text-white">
            <Mail /> thankadigital@gmail.com
          </Link>
        </div>
      </section>
    </>
  )
}

export default ContactPage