'use client';
import Navbar from "@/app/component/Navigation/Navbar";
import Footer from "@/app/component/section/Footer/Footer";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://formsubmit.co/heshannavi091@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("Response Status:", response.status); // Log the response status
  
      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setFormStatus("Form submitted successfully!");
      } else {
        const errorData = await response.json(); // Get error message from response
        console.error("Submission Error:", errorData); // Log the error
        setFormStatus("There was an error submitting the form: " + errorData.message);
      }
    } catch (error) {
      console.error("Error:", error); // Log any other error
      setFormStatus("There was an error submitting the form.");
    }
  };
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center mt-8">
        <Navbar />
      </div>
      <h2 className="text-4xl text-white mt-8 font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-100">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your name"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-100">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your email"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-100">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Subject"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-100">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your message"
            rows={5}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full mb-12 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#3533cd] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
      {formStatus && <p className="mt-4 mb-4 text-green-500 text-center">{formStatus}</p>}
      <Footer />
    </div>
  );
}
