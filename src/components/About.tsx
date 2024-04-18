"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full page-height mt-[70px] p-10" id="about">
      <div className="flex gap-10 h-full items-center">
        <div className="flex flex-col gap-5 items-center h-full justify-end mr-10">
          <FaLinkedin
            size={30}
            className="cursor-pointer text-gray-500 hover:text-[#0c66c2]"
          />
          <FaGithub
            size={30}
            className="cursor-pointer text-gray-500 hover:text-black"
          />
          <span className="h-10 border-r-2 border-r-black" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-3xl">About Myself</p>
            <p className="text-5xl">Baker Sekitoleko</p>
            <p className="text-xl">
              I&#x2019;m a Full-Stack software engineer with a strong focus on
              the frontend. Recently, I have been passionately working on React,
              Next, Node and Nest related projects. I am passionate about user
              experience and constantly strive to create intuitive and engaging
              applications. My goal is to continue to develop my skills and work
              on projects that make a positive impact on society.
            </p>
            <div className="flex gap-5 items-center mt-10 cursor-pointer">
              <p className="arrow-container text-2xl">
                <span className="line mr-4"></span> LINKEDIN
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <Image
              src="/assets/images/me.jpg"
              alt="me"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="flex gap-5 items-end h-full justify-end w-10">
          <div className="w-10 h-10 border-r-2 border-r-black border-b-2 border-b-black" />
        </div>
      </div>
    </section>
  );
};

export default About;
