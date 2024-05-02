"use client";
import React from "react";
import Container from "./Container";
import { Tabs, TabsProps } from "antd";
import { Roboto } from "next/font/google";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import employment from "../data/employment.json";
import Employment from "./Employment";
import { useIsVisible } from "@/hooks";
import Tab from "./Tab";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <Tab label="Virtus Ventures" country="USA" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Virtus} />,
  },
  {
    key: "2",
    label: <Tab label="Cognative Insights" country="Uganda" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Cognative} />,
  },
  {
    key: "3",
    label: <Tab label="LUK Solar" country="Uganda" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.LUKSolar} />,
  },
  {
    key: "4",
    label: <Tab label="HackerBay" country="USA" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.HackerBay} />,
  },
  {
    key: "5",
    label: <Tab label="Andela" country="Uganda" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Andela} />,
  },
  {
    key: "6",
    label: <Tab label="Go Pay" country="Uganda" />,
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.GoPay} />,
  },
];

const Experience = () => {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useIsVisible(ref);

  React.useEffect(() => {
    if (isInView) {
      dispatch(setActive("experience"));
    }
  }, [dispatch, isInView]);

  return (
    <Container containerId="experience">
      <div
        ref={ref}
        id={isInView ? "visible" : ""}
        className={`flex-1 ${
          isInView
            ? "opacity-100 duration-1000 transition ease-in"
            : "opacity-0"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-10 my-10 py-10 border-b-2 border-b-white">
          <p className="text-5xl">Experience</p>
          <p>
            Over the years, I have built extensive knowledge, expertise and
            transferable skills that guarantee I will come into the role and
            immediately start contributing to your financial and commercial
            objectives
          </p>
        </div>
        <Tabs
          tabPosition="left"
          animated={{ tabPane: false, inkBar: false }}
          tabBarStyle={{
            fontSize: "18px",
            color: "#fff",
            backgroundColor: "#12181f",
          }}
          items={items}
          className={`${roboto.className}`}
        />
      </div>
    </Container>
  );
};

export default Experience;
