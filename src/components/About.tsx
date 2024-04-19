"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";

const About = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  React.useEffect(() => {
    if (isVisible) {
      dispatch(setActive("about"));
    }
  }, [dispatch, isVisible]);

  return (
    <Container containerId="about">
      <div
        className="flex-1 flex flex-col-reverse lg:flex-row"
        ref={ref}
        id={isVisible ? "visible" : ""}
      >
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <p className="text-3xl md:text4xl mt-10">About Myself</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Baker Sekitoleko
          </p>
          <p>
            I&#x2019;m a Full-Stack software engineer with a strong focus on the
            frontend. Recently, I have been passionately working on React, Next,
            Node and Nest related projects. I am also passionate about user
            experience and constantly strive to create intuitive and engaging
            applications. My goal is to continue to develop my skills and work
            on projects that make a positive impact on the society.
          </p>
          <div className="flex gap-5 items-center mt-10 cursor-pointer">
            <Link
              className="arrow-container text-2xl cursor-pointer"
              href="https://www.linkedin.com/in/baker-sekitoleko-b52257192"
              target="_blank"
            >
              <span className="line mr-4"></span> LINKEDIN
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center my-auto">
          <div className="w-[400px] h-[400px]">
            <Image
              src="/assets/images/me.jpg"
              alt="me"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
