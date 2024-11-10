import React from "react";
import Github from "../assets/Github.png";

const Cards = ({ item }) => {
  return (
    <section className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 p-4">
      <img
        src={item.image}
        alt={`${item.title} project screenshot`}
        className="rounded-lg"
      />
      <div className="p-4">
        <h1 className="mb-2 text-xl font-semibold">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="px-3 py-2 text-white bg-red-500 rounded-md">
            <a href={item.live} target="_blank" rel="noopener noreferrer">
              Live Preview
            </a>
          </button>
          <button className="flex items-center gap-1 px-3 py-2 text-white bg-black rounded-md">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <img src={Github} alt="Github logo" className="w-6" />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
