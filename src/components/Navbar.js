import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 h-16 left-0 w-screen flex bg-gray-800 items-center px-4 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-6 h-full">
        <div className="flex gap-6 h-full">
          <a
            href="#home"
            className="hover:bg-gray-50/20 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:bg-gray-50/20 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:bg-gray-50/20 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
