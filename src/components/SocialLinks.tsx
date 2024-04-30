import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      <Link
        href="https://www.linkedin.com/in/baker-sekitoleko-b52257192"
        className="cursor-pointer"
        target="_blank"
      >
        <FaLinkedin size={30} className="text-gray-500 hover:text-white" />
      </Link>
      <Link
        href="https://github.com/Qadriyah"
        className="cursor-pointer"
        target="_blank"
      >
        <FaGithub size={30} className="text-gray-500 hover:text-white" />
      </Link>
      <Link
        href="https://www.dropbox.com/scl/fi/smilhxae0fm8hlz6d3huc/Resume.pdf?rlkey=ey96fbvw8c67q5t0v5453vjs2&dl=0"
        className="cursor-pointer"
        target="_blank"
      >
        <FaFilePdf size={30} className="text-gray-500 hover:text-white" />
      </Link>
    </>
  );
};

export default SocialLinks;
