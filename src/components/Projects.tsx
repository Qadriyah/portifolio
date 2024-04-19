"use client";
import React from "react";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";

const Projects = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  React.useEffect(() => {
    if (isVisible) {
      dispatch(setActive("projects"));
    }
  }, [dispatch, isVisible]);

  return (
    <Container containerId="projects">
      <div className="flex-1" ref={ref} id={isVisible ? "visible" : ""}>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-black">
          <p className="text-5xl">Projects</p>
          <p>
            Over the years, I have built extensive knowledge, expertise and
            transferable skills that guarantee I will come into the role and
            immediately start contributing to your financial and commercial
            objectives
          </p>
        </div>
        <div className="overflow-x-scroll min-w-[200px]"></div>
      </div>
    </Container>
  );
};

export default Projects;
