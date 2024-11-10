import React from "react";
import MainProfile from "../assets/Main-profile.png";
import reactLogo from "../assets/React.png";
import tailwind from "../assets/Tailwind Css.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import JavaScript from "../assets/JS.png";
import CV from "../files/CV.pdf";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <div className="pt-20 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="flex flex-col mt-10 mb-8 space-y-6 w-[70vw] lg:w-1/2 md:mb-0 lg:px-0 lg:mt-0">
            <h1 className="text-4xl font-bold lg:text-7xl lg:leading-snug">
              Welcome! <br />
              I'm Meng <span className="text-red-500">Heang</span>
            </h1>
            <p className="mb-4 text-xl text-red-500 md:text-2xl font-dynapuff">
              Web developer <span className="text-black">&</span> Designer
            </p>
            <p className="mb-4 font-lobster">
              My focus is on creating seamless, responsive, and accessible
              experiences that delight users and solve real-world problems. This
              portfolio showcases my journey and skills as I work to build
              functional, beautiful websites. I invite you to explore my work
              and connect with me—together, let’s make something amazing!
            </p>
            <div className="flex justify-between">
              <div className="flex space-x-1 md:space-x-3">
                <a
                  href="https://www.facebook.com/chhun.mengheang.37?mibextid=LQQJ4d"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full md:w-10 md:h-10"
                >
                  <i className="text-white ri-facebook-fill"></i>
                </a>
                <a
                  href="tel:+0968147734"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full md:w-10 md:h-10"
                >
                  <i className="text-white ri-phone-fill"></i>
                </a>
                <a
                  href="mailto:chhunmengheang5@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Mengheang,"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full md:w-10 md:h-10"
                >
                  <i className="text-white ri-mail-send-fill"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/chhun-mengheang-b0907230a/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full md:w-10 md:h-10"
                >
                  <i className="text-white ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://t.me/chhun_meng_heang"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full md:w-10 md:h-10"
                >
                  <i className="text-white ri-telegram-2-fill"></i>
                </a>
              </div>
              <button className="px-3 py-2 text-sm text-white bg-black rounded-md w-max md:text-lg">
                <a href={CV} download="cv">
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="relative flex items-end justify-center mb-10 md:w-1/2">
            <img src={MainProfile} alt="hero" className="lg:h-[70vh] h-72" />
            <img
              src={reactLogo}
              alt="react logo"
              className="absolute w-8 rounded-full sm:w-10 -left-4 top-40 md:hidden"
            />
            <img
              src={Html}
              alt="html logo"
              className="absolute right-0 w-8 rounded-full sm:w-12 drop-shadow-xl md:hidden top-11 shadow-black"
            />
            <img
              src={Css}
              alt="css logo"
              className="absolute w-8 sm:w-10 -top-4 md:hidden"
            />
            <img
              src={tailwind}
              alt="tailwind logo"
              className="absolute w-8 rounded-full sm:w-10 md:hidden -right-4 top-40"
            />
            <img
              src={JavaScript}
              alt="javascript logo"
              className="absolute left-0 w-8 rounded-full md:hidden sm:w-11 top-11"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
