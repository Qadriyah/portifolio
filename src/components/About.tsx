"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import myInfo from "../data/info.json";
import { useIsVisible } from "@/hooks";

const About = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useIsVisible(ref);

  React.useEffect(() => {
    if (isInView) {
      dispatch(setActive("about"));
    }
  }, [dispatch, isInView]);

  return (
    <Container containerId="about">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: isInView ? 0 : -500 }}
        transition={{ type: "spring", duration: 1.3, bounce: 0.3 }}
        className="flex-1 flex gap-10 flex-col-reverse lg:flex-row"
        id={isInView ? "visible" : ""}
        ref={ref}
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
      </motion.div>
    </Container>
  );
};

export default About;
