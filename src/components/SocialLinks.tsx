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
        href="https://www.dropbox.com/scl/fi/z827e9i2wchc1vmt7ghxz/Resume.pdf?rlkey=r0np6w1zjivlab6f4j4nhqzpx&dl=0"
        className="cursor-pointer"
        target="_blank"
      >
        <FaFilePdf size={30} className="text-gray-500 hover:text-white" />
      </Link>
    </>
  );
};

export default SocialLinks;
