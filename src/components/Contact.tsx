"use client";
import React from "react";
import Container from "./Container";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useIsVisible } from "@/hooks";
import { motion } from "framer-motion";

const Contact = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useIsVisible(ref);

  React.useEffect(() => {
    if (isInView) {
      dispatch(setActive("contact"));
    }
  }, [dispatch, isInView]);

  return (
    <Container containerId="contact">
      <div className="flex-1" ref={ref} id={isInView ? "visible" : ""}>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <div className="flex-[0.5]">
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
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-[0.5]"></div>
          <div className="flex-1 flex flex-col gap-10 md:flex-row md:gap-0">
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: isInView ? 0 : -500 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col gap-5 flex-1 ${
                isInView ? "block" : "hidden"
              }`}
            >
              <p className="text-4xl">Contact</p>
              <p>Email: bksekitoleko@gmail.com</p>
              <div className="flex gap-5">
                <SocialLinks />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: isInView ? 0 : 500 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col gap-10 flex-1 ${
                isInView ? "block" : "hidden"
              }`}
            >
              <p className="text-4xl">Message</p>
              <div>
                <Link
                  href="mailto:bksekitoleko@gmail.com"
                  className="cursor-pointer border border-white text-center p-5 rounded-md hover:bg-white hover:border-blue-600 hover:border-2 hover:text-blue-600"
                  target="_blank"
                >
                  Say Hello
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
