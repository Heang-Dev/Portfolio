import React from "react";

const About = () => {
  return (
    <section className="relative" id="about">
      <div className="py-12 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="py-5 my-10 text-4xl font-bold text-red-500 lg:text-5xl font-dynapuff">
              About Me
            </h1>
            <p className="mt-2 mt-5 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Chhun Mengheang
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="">
                <h3 className="text-2xl font-semibold text-red-500 font-dynapuff">
                  Background & Passion
                </h3>
                <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto font-lobster">
                  I’m a 20-year-old{" "}
                  <b className="text-red-400">
                    Computer Science student at Asia Euro University
                  </b>
                  , currently in my third year, captivated by front-end
                  development from the moment I wrote my first line of code.
                  Driven by curiosity about the intersection of design and
                  technology, I build websites and applications that are both
                  functional and aesthetically pleasing.
                </p>
                <br />
                <hr />
              </div>
              <div className="">
                <h3 className="text-2xl font-semibold text-red-500 font-dynapuff">
                  Focus & Growth
                </h3>
                <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto font-lobster">
                  With a strong emphasis on user experience, I’m dedicated to
                  creating accessible, responsive, and dynamic websites. I stay
                  updated on industry trends and continuously seek innovative
                  approaches in my work. My journey so far has taught me the
                  importance of attention to detail, problem-solving, and clear
                  communication—skills I bring to every project.
                </p>
                <br />
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
