"use client";
import React from "react";
import Container from "./Container";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  React.useEffect(() => {
    if (isVisible) {
      dispatch(setActive("contact"));
    }
  }, [dispatch, isVisible]);

  return (
    <Container containerId="contact">
      <div className="flex-1" ref={ref} id={isVisible ? "visible" : ""}>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <div className="w-[300px]">
            <p className="text-5xl">Let&#x2019;s Talk</p>
          </div>
          <div className="flex-1">
            <p>
              Want to start an awesome project or have an opportunity that you
              would like to discuss, feel free to reach out any time. Here is
              how you can reach me:
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-[300px]"></div>
          <div className="flex-1 flex flex-col gap-10 md:flex-row md:gap-0">
            <div className="flex flex-col gap-5 flex-1">
              <p className="text-4xl">Contact</p>
              <p>Email: b.alzawad@gmail.com</p>
              <div className="flex gap-5">
                <Link
                  href="https://www.linkedin.com/in/baker-sekitoleko-b52257192"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <FaLinkedin
                    size={30}
                    className="text-gray-500 hover:text-white"
                  />
                </Link>
                <Link
                  href="https://github.com/Qadriyah"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <FaGithub
                    size={30}
                    className="text-gray-500 hover:text-white"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-10 flex-1">
              <p className="text-4xl">Message</p>
              <div>
                <Link
                  href="mailto:b.alzawad@gmail.com"
                  className="cursor-pointer border border-white text-center p-5 rounded-md hover:bg-white hover:border-blue-600 hover:border-2 hover:text-blue-600"
                  target="_blank"
                >
                  Say Hello
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
