"use client";
import React from "react";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import ProjectItem from "./ProjectItem";
import OtherProject from "./OtherProject";
import projects from "../data/projects.json";

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
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <p className="text-5xl">Projects</p>
          <p>Here is a list of some thing I have built</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.featuredProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <p className="text-2xl md:text-4xl lg:text-5xl">
            Other Noteworthy Projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.otherProjects.map((project, index) => (
            <OtherProject key={index} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
