"use client";

import React, { useState, useEffect } from "react";
import {
  EnvelopeOpenFill,
  GeoAltFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaInput, setCaptchaInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (parseInt(captchaInput) !== num1 + num2) {
      toast.error("Verification answer is incorrect");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setCaptchaInput("");
        generateCaptcha();
      } else {
        toast.error("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-no-repeat bg-cover bg-center space-y-12 py-24 px-4 xl:px-60"
      style={{ backgroundImage: `url(/assets/contact.png)` }}
    >
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />

      <div className="p-4 lg:p-8 bg-white rounded-2xl">
        <h2 className="text-[#12a7b5] font-bold text-4xl">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-5 bg-white sm:max-w-lg px-4 p-8 sm:px-8 sm:rounded-xl"
          >
            <label className="font-medium">Full name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 px-3 py-2 border rounded-lg text-[#12a7b5]"
            />

            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 border rounded-lg text-[#12a7b5]"
            />

            <label className="font-medium">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 h-36 px-3 py-2 border rounded-lg text-[#12a7b5] resize-none"
            />

            <label className="font-medium">
              What is {num1} + {num2}?
            </label>
            <input
              type="number"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full mt-2 px-3 py-2 border rounded-lg text-[#12a7b5]"
            />

            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-amber-500 rounded-lg flex items-center justify-center cursor-pointer disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </form>

          <div className="p-8 space-y-8 my-auto">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-4"
            >
              <GeoAltFill className="text-amber-500" size={24} />
              <span>10 Hughes Avenue Alagomeji Yaba</span>
            </a>
            <a href="tel:+2348160925033" className="flex space-x-4">
              <TelephoneFill className="text-amber-500" size={24} />
              <span>+234 802 946 3826</span>
            </a>
            <a href="mailto:hello@quadloop.africa" className="flex space-x-4">
              <EnvelopeOpenFill className="text-amber-500" size={24} />
              <span>hello@quadloop.africa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
