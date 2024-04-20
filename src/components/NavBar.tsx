"use client";
import React from "react";
import Anchor from "./Anchor";
import { useAppSelector } from "@/lib/hooks";

const NavBar = () => {
  const { active } = useAppSelector((state) => state.menu);

  return (
    <nav className="w-full bg-[#060b10] fixed top-0 z-50 h-[70px]">
      <div className="flex gap-5 justify-center">
        <Anchor
          id={`${active === "about" ? "active" : undefined}`}
          href="#about"
          offset={70}
          className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
            active === "about"
              ? "text-blue-500 border-b-2 border-b-blue-500"
              : ""
          }`}
        >
          About
        </Anchor>
        <Anchor
          id={`${active === "experience" ? "active" : undefined}`}
          href="#experience"
          offset={70}
          className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
            active === "experience"
              ? "text-blue-500 border-b-2 border-b-blue-500"
              : ""
          }`}
        >
          Experience
        </Anchor>
        <Anchor
          id={`${active === "projects" ? "active" : undefined}`}
          href="#projects"
          offset={70}
          className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
            active === "projects"
              ? "text-blue-500 border-b-2 border-b-blue-500"
              : ""
          }`}
        >
          Projects
        </Anchor>
        <Anchor
          id={`${active === "contact" ? "active" : undefined}`}
          href="#contact"
          offset={70}
          className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
            active === "contact"
              ? "text-blue-500 border-b-2 border-b-blue-500"
              : ""
          }`}
        >
          Contact
        </Anchor>
      </div>
    </nav>
  );
};

export default NavBar;
