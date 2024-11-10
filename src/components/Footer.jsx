import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  // SCROLL UP BUTTON
  useEffect(() => {
    const scrollUp = () => {
      const scrollUpBtn = document.getElementById("scroll-up");

      if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
      } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
      }
    };

    window.addEventListener("scroll", scrollUp);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  // ACTIVE LINK
  // useEffect(() => {
  //   const activeLink = () => {
  //     const sections = document.querySelectorAll("section");
  //     const navLink = document.querySelectorAll(".nav-link");

  //     let current = "home";

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;

  //       if (window.scrollY >= sectionTop - 100) {
  //         current = section.getAttribute("id");
  //         console.log(current);
  //       }
  //     });

  //     navLink.forEach((item) => {
  //       item.classList.remove("active");

  //       if (item.href.includes(current)) {
  //         item.classList.add("active");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", activeLink);

  //   // Clean up the event listener on component unmount
  //   return () => window.removeEventListener("scroll", activeLink);
  // }, []);

  return (
    <footer className="relative py-4 bg-gray-100">
      <div className="container px-4 mx-auto text-center">
        <p>&copy; 2024 Meng Heang. All rights reserved</p>
      </div>
      <a
        href="#home"
        className="fixed z-50 inline-block px-3 py-1 text-lg duration-300 bg-red-500 rounded-md shadow-sm right-4 -bottom-1/2 md:px-4 md:py-2 hover:-translate-y-1"
        id="scroll-up"
      >
        <i className="text-white ri-arrow-up-line"></i>
      </a>
    </footer>
  );
};

export default Footer;
