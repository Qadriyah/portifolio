import React, { FunctionComponent } from "react";
import { IoVideocam } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

type IProps = {
  project: {
    title: string;
    description: string;
    image: string;
    video: string;
    repo: string;
    host: string;
  };
};

const ProjectItem: FunctionComponent<IProps> = ({ project }) => {
  return (
    <div className="flex-1 flex flex-col gap-5 justify-between bg-[#12181f] rounded-md cursor-pointer duration-500 md:group-hover:blur-sm md:hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 tracking-wider">
      <div className="p-10">
        <p className="text-3xl mb-5">{project.title}</p>
        <p>{project.description}</p>
        <div className="flex gap-5 my-5">
          <Link href={project.video} target="_blank" className="cursor-pointer">
            <IoVideocam size={30} className="text-gray-500 hover:text-white" />
          </Link>
          <Link href={project.repo} target="_blank" className="cursor-pointer">
            <SiGithub size={30} className="text-gray-500 hover:text-white" />
          </Link>
          <Link href={project.host} target="_blank" className="cursor-pointer">
            <FiLink size={30} className="text-gray-500 hover:text-white" />
          </Link>
        </div>
      </div>
      <Link href={project.host} target="_blank">
        <div
          className="min-h-[250px] w-full"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </Link>
    </div>
  );
};

export default ProjectItem;
