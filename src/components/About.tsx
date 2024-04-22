"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import myInfo from "../data/info.json";

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
        className="flex-1 flex gap-10 flex-col-reverse lg:flex-row"
        ref={ref}
        id={isVisible ? "visible" : ""}
      >
        <div className="flex-1 flex flex-col gap-5 justify-center">
          <p className="text-3xl md:text4xl mt-10">About Myself</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Baker Sekitoleko
          </p>
          <p>{myInfo.about}</p>
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
        <div
          className="min-h-[300px] w-full lg:w-[400px] lg:h-[400px] my-auto"
          style={{
            backgroundImage: `url(${"/assets/images/me.jpg"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </Container>
  );
};

export default About;
