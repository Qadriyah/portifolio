"use client";
import React from "react";
import Container from "./Container";
import { Tabs, TabsProps } from "antd";
import { Roboto } from "next/font/google";
import { useIsVisible } from "@/hooks";
import { useAppDispatch } from "@/lib/hooks";
import { setActive } from "@/lib/features/menu";
import employment from "../data/employment.json";
import Employment from "./Employment";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Virtus Ventures",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Virtus} />,
  },
  {
    key: "2",
    label: "Cognative Insights",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Cognative} />,
  },
  {
    key: "3",
    label: "LUK Solar",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.LUKSolar} />,
  },
  {
    key: "4",
    label: "HackerBay",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.HackerBay} />,
  },
  {
    key: "5",
    label: "Andela",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.Andela} />,
  },
  {
    key: "6",
    label: "Go Pay",
    className: `text-[18px] text-white ${roboto.className}`,
    children: <Employment employer={employment.GoPay} />,
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
