"use client";
import React from "react";
import Anchor from "./Anchor";

const NavBar = () => {
  return (
    <nav className="w-full border-b bg-white fixed top-0 z-50 h-[70px]">
      <div className="flex gap-5 justify-center">
        <Anchor
          id="active"
          href="#about"
          offset={70}
          className="p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 text-blue-500 border-b-2 border-b-blue-500"
        >
          About
        </Anchor>
        <Anchor
          href="#experience"
          offset={70}
          className="p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500"
        >
          Experience
        </Anchor>
        <Anchor
          href="#projects"
          offset={70}
          className="p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500"
        >
          Projects
        </Anchor>
        <Anchor
          href="#contact"
          offset={70}
          className="p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500"
        >
          Contact
        </Anchor>
      </div>
    </nav>
  );
};

export default NavBar;
