import React from "react";
import { Drawer, type DrawerProps } from "antd";
import { useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import menuItems from "../../data/menuItems.json";
import Anchor from "../Anchor";
import { useAppSelector } from "@/lib/hooks";

const DrawerNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { active } = useAppSelector((state) => state.menu);
  const [placement] = React.useState<DrawerProps["placement"]>("left");

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      <Drawer
        placement={placement}
        closable={false}
        onClose={() => toggleOpen()}
        open={isOpen}
        key={placement}
        style={{
          backgroundColor: "#12181f",
          width: "200px",
        }}
      >
        <div className="flex flex-col w-[100px]">
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
      </Drawer>
    </>
  );
};

export default DrawerNav;
