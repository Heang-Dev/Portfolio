import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import "remixicon/fonts/remixicon.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-5 py-10 bg-gray-800 z-5 md:px-0"
    >
      <div className="mx-auto mb-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 ml-2 md:w-1/2 md:mb-0">
            <h2 className="pt-5 mb-3 text-3xl font-bold text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/chhun.mengheang.37?mibextid=LQQJ4d"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full"
              >
                <i className="text-white ri-facebook-fill"></i>
              </a>
              <a
                href="tel:+0968147734"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full"
              >
                <i className="text-white ri-phone-fill"></i>
              </a>
              <a
                href="mailto:chhunmengheang5@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Mengheang,"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full"
              >
                <i className="text-white ri-mail-send-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chhun-mengheang-b0907230a/"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full"
              >
                <i className="text-white ri-linkedin-fill"></i>
              </a>
              <a
                href="https://t.me/chhun_meng_heang"
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full"
              >
                <i className="text-white ri-telegram-2-fill"></i>
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form className="w-full p-10 bg-gray-100 border border-red-300 rounded-lg shadow-lg md:w-1/2 shadow-red-500">
            <h1 className="text-4xl font-bold text-gray-900 mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className="px-3 py-2 text-white bg-red-500 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
