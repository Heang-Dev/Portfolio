import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="flex items-center mx-auto max-w-7xl h-14">
        <div className="flex justify-between w-full md:mr-4">
          <a href="#" className="flex items-center mr-6 space-x-2">
            <img src={Logo} alt="logo" className="w-36" />
          </a>
          <nav className="items-center hidden space-x-6 text-lg font-medium md:flex">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "testimonials",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={handleMenuItemClick}
                className={`px-5 ${
                  activeSection === section ? "text-red-500" : "text-black"
                } transition-colors hover:text-red-500`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="p-3 space-y-1 text-center">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "testimonials",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => {
                  handleMenuItemClick();
                  setActiveSection(section);
                }}
                className={`block px-3 py-2 text-base font-medium rounded-md ${
                  activeSection === section ? "text-red-500" : "text-gray-700"
                } hover:text-red-500 hover:bg-gray-50`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
