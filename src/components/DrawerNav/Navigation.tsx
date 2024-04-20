import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import menuItems from "../../data/menuItems.json";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = () => {
  return (
    <motion.ul variants={variants}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
