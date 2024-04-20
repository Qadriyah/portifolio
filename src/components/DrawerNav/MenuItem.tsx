import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Anchor from "../Anchor";
import { useAppSelector } from "@/lib/hooks";

type IProps = {
  item: {
    id: string;
    title: string;
    route: string;
  };
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: FunctionComponent<IProps> = ({ item }) => {
  const { active } = useAppSelector((state) => state.menu);

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Anchor
        id={`${active === item.id ? "active" : undefined}`}
        href={item.route}
        offset={70}
        className={`p-5 hover:text-blue-500 hover:border-b-2 hover:border-b-blue-500 ${
          active === item.id ? "text-blue-500 border-b-2 border-b-blue-500" : ""
        }`}
      >
        {item.title}
      </Anchor>
    </motion.li>
  );
};

export default MenuItem;
