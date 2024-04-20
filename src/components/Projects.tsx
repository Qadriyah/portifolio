"use client";
import React from "react";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import ProjectItem from "./ProjectItem";
import OtherProject from "./OtherProject";

const projects = [
  {
    title: "eShop",
    description:
      "E-commerce tool used to sell things online. This is a management dashboard for this application",
    image: "/assets/images/eshop.png",
    video: "https://www.loom.com/share/02b41ba2ed984a9eaa6a15680bd90d1b",
    repo: "https://github.com/Qadriyah/eshop-dashboard",
    host: "https://console-eshop.netlify.app",
  },
  {
    title: "OneUptime",
    description: "A Software Reliability Engineering tool",
    image: "/assets/images/oneuptime.png",
    video: "https://youtu.be/_fQ_F4EisBQ",
    repo: "https://github.com/oneuptime/oneuptime",
    host: "https://oneuptime.com/",
  },
  {
    title: "UncleBob",
    description: "A construction services hailing application",
    image: "/assets/images/unclebob.png",
    video: "https://www.loom.com/share/0019066ad45f44c48e65569c5fe2c7b2",
    repo: "#",
    host: "https://apps.apple.com/us/app/unclebob-app/id6444808139",
  },
];

const otherProjects = [
  {
    title: "Crud",
    description: "A simple CRUD application",
    repo: "https://github.com/Qadriyah/crud",
    technologies: ["JS", "TS", "React", "Redux"],
  },
  {
    title: "Calendar",
    description: "A simple calendar implementation",
    repo: "https://github.com/Qadriyah/calendar",
    technologies: ["JS", "TS", "React", "Next", "Tailwind"],
  },
  {
    title: "Would You Rather",
    description:
      "A game where a user is asked a question in the form Would you rather [option A] or [option B]? The user can only select one answer. Selecting neither or both is not allowed.",
    repo: "https://github.com/Qadriyah/would-you-rather",
    technologies: ["JS", "React", "Redux", "Bootstrap"],
  },
  {
    title: "My Reads",
    description:
      "A bookshelf application that allows you to select and categorize books you have read, are currently reading, or want to read. It also allows you to search for new books and add them to your categories or shelves.",
    repo: "https://github.com/Qadriyah/MyReads",
    technologies: ["JS", "React"],
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              video={project.video}
              repo={project.repo}
              host={project.host}
            />
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <p className="text-2xl md:text-4xl lg:text-5xl">
            Other Noteworthy Projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((project, index) => (
            <OtherProject
              key={index}
              title={project.title}
              description={project.description}
              repo={project.repo}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
