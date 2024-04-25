"use client";
import React from "react";
import Container from "./Container";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { useIsVisible } from "@/hooks";

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
                <SocialLinks />
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
