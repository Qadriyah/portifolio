"use client";
import React from "react";
import Anchor from "./Anchor";
import { useAppSelector } from "@/lib/hooks";
import menuItems from "../data/menuItems.json";
import Drawer from "./DrawerNav/Drawer";

const NavBar = () => {
  const { active } = useAppSelector((state) => state.menu);

  return (
    <nav className="w-full bg-[#060b10] fixed top-0 z-50 h-[70px] menu">
      <div className="gap-5 justify-center hidden md:flex">
        {menuItems.map((item, index) => (
          <Anchor
            key={index}
            id={`${active === item.id ? "active" : undefined}`}
            href={item.route}
            offset={70}
            className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
              active === item.id
                ? "text-blue-500 border-b-2 border-b-blue-500"
                : ""
            }`}
          >
            {item.title}
          </Anchor>
        ))}
      </div>
      <Drawer />
    </nav>
  );
};

export default NavBar;
