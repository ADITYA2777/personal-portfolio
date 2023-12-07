import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      // Validate form fields using regex
      const nameRegex = /^[a-zA-Z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameRegex.test(formData.name)) {
        toast.error("Invalid name format");
        return;
      }

      if (!emailRegex.test(formData.email)) {
        toast.error("Invalid email format");
        return;
      }

      try {
        // Use fetch or axios to send data to your backend
        const response = await fetch(
          "https://getform.io/f/5bfaeb1b-464e-4d0b-8a39-209fd0b00aa1",
          {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        // Show success toast
        toast.success("Form submitted successfully!");
      } catch (error) {
        // Handle error and show error toast
        console.error("Error submitting form:", error);
        toast.error("Error submitting form. Please try again later.");
      }
    };



  const socialLink = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/aditya-jain-645709246",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ADITYA2777",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ajboss01032000@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"/AdityaReume01.pdf",
      download: true,
    },
  ];
  return (
    <div
      name="Contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8 m-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center m-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              pattern="[a-zA-Z\s]+"
              title="Only letters and spaces are allowed"
            />

            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white"
            >
              Let's talk
            </button>
          </form>
        </div>

        <div className="md:hidden sm:block flex w-full justify-evenly text-3xl">
          <ul className="flex flex-wrap space-x-6">
            {socialLink.map(({ id, child, href, download }) => (
              <li key={id} className="mb-2">
                <a
                  href={href}
                  className="flex items-center font-bold text-white hover:scale-110"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Contact;
