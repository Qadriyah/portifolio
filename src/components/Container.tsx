"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

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
        <SocialLinks />
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
