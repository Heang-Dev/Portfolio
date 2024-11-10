import React from "react";
import IceCream from "../assets/projectComponent/ice-cream.png";
import Plant from "../assets/projectComponent/plant.png";
import Nike from "../assets/projectComponent/nike.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      title: "Ice-cream website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
      image: IceCream,
      live: "https://icream-mengheang.netlify.app/",
      github: "",
    },
    {
      title: "Plant website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
      image: Plant,
      live: "https://plant-mengheang.netlify.app/",
      github: "",
    },
    {
      title: "Nike website",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
      image: Nike,
      live: "https://nike-mengheang.netlify.app/",
      github: "",
    },
  ];

  return (
    <section id="projects" className="relative px-4 py-10 bg-gray-700">
      <div className="mx-auto mb-16 max-w-7xl">
        <h2 className="pt-5 pb-4 mb-8 text-3xl font-bold text-white border-b border-red-500 w-max">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projectJson.map((items) => {
            return <Cards item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
