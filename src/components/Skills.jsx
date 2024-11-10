import React from "react";
import reactLogo from "../assets/React.png";
import tailwind from "../assets/Tailwind Css.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import JavaScript from "../assets/JS.png";

const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-10 bg-gray-300">
      <div className="flex flex-col">
        <div className="pt-10">
          <h1 className="pt-5 text-3xl font-bold text-center text-red-500 font-dynapuff lg:text-5xl">
            Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10 py-10 mx-auto md:grid-cols-3 lg:grid-cols-5 place-items-center">
          <div className="flex flex-col items-center justify-between w-full p-4 mb-20 bg-gray-200 border border-gray-400 rounded-lg shadow-md shadow-red-500 max-h-80">
            <img src={Html} alt="" className="w-40" />
            <div className="flex items-center justify-around mt-10 text-xl">
              <p className="px-5 border-r-2 border-black">HTML</p>
              <p className="px-5">100%</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full p-4 mb-20 bg-gray-200 border border-gray-400 rounded-lg shadow-md shadow-red-500 max-h-80">
            <img src={Css} alt="" className="w-32" />
            <div className="flex items-center justify-around mt-10 text-xl">
              <p className="px-5 border-r-2 border-black">CSS</p>
              <p className="px-5">100%</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full p-4 mb-20 bg-gray-200 border border-gray-400 rounded-lg shadow-md shadow-red-500 max-h-80">
            <img src={tailwind} alt="" className="w-32 rounded-lg" />
            <div className="flex items-center justify-around mt-10 text-xl">
              <p className="px-5 border-r-2 border-black">Tailwind</p>
              <p className="px-5">100%</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full p-4 mb-20 bg-gray-200 border border-gray-400 rounded-lg shadow-md shadow-red-500 max-h-80">
            <img src={JavaScript} alt="" className="w-36" />
            <div className="flex items-center justify-around mt-10 text-xl">
              <p className="px-5 border-r-2 border-black">JavaScript</p>
              <p className="px-5">100%</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full p-4 mb-20 bg-gray-200 border border-gray-400 rounded-lg shadow-md shadow-red-500 max-h-80">
            <img src={reactLogo} alt="" className="w-32 rounded-md" />
            <div className="flex items-center justify-around mt-10 text-xl">
              <p className="px-5 border-r-2 border-black">React JS</p>
              <p className="px-5">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
