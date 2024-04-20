import React, { FunctionComponent } from "react";
import { IoVideocam } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

type IProps = {
  title: string;
  description: string;
  image: string;
  video: string;
  repo: string;
  host: string;
};

const ProjectItem: FunctionComponent<IProps> = ({
  title,
  description,
  image,
  video,
  repo,
  host,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-5 justify-between">
      <div>
        <p className="text-3xl mb-5">{title}</p>
        <p>{description}</p>
        <div className="flex gap-5 my-5">
          <Link href={video} target="_blank" className="cursor-pointer">
            <IoVideocam size={30} className="text-gray-500 hover:text-white" />
          </Link>
          <Link href={repo} target="_blank" className="cursor-pointer">
            <SiGithub size={30} className="text-gray-500 hover:text-white" />
          </Link>
          <Link href={host} target="_blank" className="cursor-pointer">
            <FiLink size={30} className="text-gray-500 hover:text-white" />
          </Link>
        </div>
      </div>
      <Image src={image} alt="img" width={300} height={300} />
    </div>
  );
};

export default ProjectItem;
