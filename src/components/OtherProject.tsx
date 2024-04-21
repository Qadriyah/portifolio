import Link from "next/link";
import React, { FunctionComponent } from "react";
import { BsFolder2Open } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import Technologies from "./Technologies";

type IProps = {
  project: {
    title: string;
    description: string;
    repo: string;
    technologies: string[];
  };
};

const OtherProject: FunctionComponent<IProps> = ({ project }) => {
  return (
    <div className="bg-[#12181f] p-5 rounded-md flex flex-col justify-between gap-5">
      <div>
        <div className="flex justify-between">
          <BsFolder2Open size={30} className="text-white" />
          <Link href={project.repo} target="_blank" className="cursor-pointer">
            <SiGithub size={30} className="text-gray-500 hover:text-white" />
          </Link>
        </div>
        <p className="text-3xl my-5">{project.title}</p>
        <p>{project.description}</p>
      </div>
      <div className="flex gap-3">
        <Technologies technologies={project.technologies} />
      </div>
    </div>
  );
};

export default OtherProject;
