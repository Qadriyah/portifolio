"use client";
import React from "react";
import Container from "./Container";
import { Tabs, TabsProps } from "antd";
import { Roboto } from "next/font/google";
import Technologies from "./Technologies";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Virtus Ventures",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Full-Stack Engineer</p>
          <p className="text-[17px]">Mar 2023 - Present</p>
        </div>
        <ul className="list">
          <li>
            Made significant improvements to in-house CRM such as introducing
            database transactions (reduced integration test time by over 60%)
            and keyset pagination which decreased fetching time by 20%, as well
            as failure retry logic.
          </li>
          <li>
            Introduced periodic report generation that increated loading time by
            40%. Also seperated a single reporting module that would load
            multiple reports simultaneously into seperating granular reports
            that increased loading by over 90%
          </li>
          <li>
            I wrote logic for uploading customer files on Google Cloud which
            were being store on a local hard drive. This significantly improved
            operational efficiency and employee productivity by 15%
          </li>
          <li>
            Also introduced redis caching on routes that were fetching a lot of
            data, this significantly improved the response time
          </li>
          <li>
            I&#x2019;m currently working a property management tool that is used
            to manage construction work on apartment buldings
          </li>
          <li>
            <Technologies
              technologies={[
                "TS",
                "TS",
                "React",
                "Redux",
                "Bootstrap",
                "Ant Design",
                "Formik",
                "Next",
                "GCP",
                "Node",
                "Express",
                "Nest",
                "MongoDB",
                "Mocha",
                "Chai",
                "Jest",
                "React Testing Library",
                "Digital Ocean",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Cognative Insights",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Frontend Engineer</p>
          <p className="text-[17px]">Sep 2022 - Feb - 2023</p>
        </div>
        <ul className="list">
          <li>
            Led the development of a construction services hailing application
            that registsred a significant number of service providers and
            customers during it&#x2019;s launch.
          </li>
          <li>
            Worked closely with the design and backend teams to ensure we put up
            something that would make the customers happy and create lasting
            value for the company.
          </li>
          <li>
            Performed software testing to uncover bugs and troubleshoot
            performance issues prior to application launch.
          </li>
          <li>
            <Technologies
              technologies={[
                "JS",
                "TS",
                "React Native",
                "Redux",
                "Redux Toolkit",
                "React Native Elements",
                "Expo",
                "Formik",
                "Socket.io",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "LUK Solar",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Frontend Engineer</p>
          <p className="text-[17px]">Mar 2022 - Aug - 2022</p>
        </div>
        <ul className="list">
          <li>
            Led the development of a in-house sales management application for
            solar products which increased Solar Scout productivity by 30%,
            reduced administrative overhead by 20%, increased operational
            efficiency and generated more funding for the company.
          </li>
          <li>
            Worked closely with the design and backend teams to ensure we put up
            something that would make the users (Solar Scouts) happy and create
            lasting value for the company.
          </li>
          <li>
            <Technologies
              technologies={[
                "JS",
                "TS",
                "React Native",
                "Redux",
                "Redux Toolkit",
                "Native Base",
                "Expo",
                "Formik",
                "Socket.io",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "HackerBay",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Full-Stack Engineer</p>
          <p className="text-[17px]">May 2020 - Oct - 2022</p>
        </div>
        <ul className="list">
          <li>
            Worked on a site reliability engineering tool. Developed and
            maintained — hands-on and fullstack — dozens of core features in
            Javascript, Node and React, across the entire platform.
          </li>
          <li>
            Worked closely with the design and backend teams to ensure we put up
            something that would make the users (Solar Scouts) happy and create
            lasting value for the company.
          </li>
          <li>
            <Technologies
              technologies={[
                "JS",
                "React",
                "Redux",
                "Redux Form",
                "Bootstrap",
                "Socket.io",
                "Node",
                "Express",
                "Puppeteer",
                "Mocha",
                "Chai",
                "Jest",
                "MongoDB",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Andela",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Full-Stack Engineer</p>
          <p className="text-[17px]">Dec 2018 - Dec - 2019</p>
        </div>
        <ul className="list">
          <li>
            Developed and maintained major features of Andela&#x2019;s in-house,
            engineer placement process managing app.
          </li>
          <li>
            Worked on multiple Andela bootcamp projects enganging in the entire
            development lifecycle, right from requirements gathering and
            refining to implementation and deployment
          </li>
          <li>
            <Technologies
              technologies={[
                "JS",
                "React",
                "Redux",
                "SASS",
                "PHP",
                "Laravel",
                "PHP Unit",
                "Jest",
                "Enzyme",
                "Python",
                "Flask",
                "Django",
                "Postgre SQL",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "6",
    label: "Go Pay",
    className: `text-[18px] ${roboto.className}`,
    children: (
      <div className="pl-5">
        <div className="mb-5">
          <p className="font-bold">Full-Stack Engineer</p>
          <p className="text-[17px]">Aug 2017 - Oct - 2018</p>
        </div>
        <ul className="list">
          <li>
            Developed and maintained major features of Go Pay&#x2019;s
            management dashboard
          </li>
          <li>
            Implemented and tested the mobile money integration using the inter
            switch API. This improved the productivity of the backend team which
            was not family with the mobile money technology
          </li>
          <li>
            <Technologies
              technologies={[
                "JS",
                "React",
                "Redux",
                "Bootstrap",
                "PHP",
                "Laravel",
                "PHP Unit",
                "Jest",
                "MySQL",
              ]}
            />
          </li>
        </ul>
      </div>
    ),
  },
];

const Experience = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  React.useEffect(() => {
    if (isVisible) {
      dispatch(setActive("experience"));
    }
  }, [dispatch, isVisible]);

  return (
    <Container containerId="experience">
      <div className="flex-1" ref={ref} id={isVisible ? "visible" : ""}>
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-black">
          <p className="text-5xl">Experience</p>
          <p>
            Over the years, I have built extensive knowledge, expertise and
            transferable skills that guarantee I will come into the role and
            immediately start contributing to your financial and commercial
            objectives
          </p>
        </div>
        <div className="overflow-x-scroll min-w-[200px]">
          <Tabs
            tabPosition="left"
            items={items}
            className={`${roboto.className} text-[24px] font-bold`}
          />
        </div>
      </div>
    </Container>
  );
};

export default Experience;
