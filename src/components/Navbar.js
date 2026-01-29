import React from "react";

export const Navbar = () => {
  return (
    <nav className="text-slate-950 font-bold fixed top-0 h-24 left-0 w-screen flex bg-transparent items-center px-4 py-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-6 h-full">
        <div className="flex gap-6 h-full">
          <a
            href="#home"
            className="hover:scale-110 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:scale-110 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:scale-110 delay-50 ease-out transition h-full rounded-md flex justify-center items-center px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
