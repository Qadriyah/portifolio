"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type IProps = React.PropsWithChildren & {
  containerId: string;
};

const Container: React.FC<IProps> = ({ containerId, children }) => {
  return (
    <section
      className="w-full mt-[70px] p-10 flex gap-10"
      id={containerId}
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      <div className="flex-col gap-5 justify-end items-center pr-5 hidden md:flex">
        <Link
          href="https://www.linkedin.com/in/baker-sekitoleko-b52257192"
          className="cursor-pointer"
          target="_blank"
        >
          <FaLinkedin size={30} className="text-gray-500 hover:text-white" />
        </Link>
        <Link
          href="https://github.com/Qadriyah"
          className="cursor-pointer"
          target="_blank"
        >
          <FaGithub size={30} className="text-gray-500 hover:text-white" />
        </Link>
        <span className="h-10 border-r-2 border-r-white" />
      </div>
      {children}
      <div className="flex-col gap-5 justify-end w-10 hidden md:flex">
        <div className="w-10 h-10 border-r-2 border-r-white border-b-2 border-b-white" />
      </div>
    </section>
  );
};

export default Container;
