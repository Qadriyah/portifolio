import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    </>
  );
};

export default SocialLinks;
