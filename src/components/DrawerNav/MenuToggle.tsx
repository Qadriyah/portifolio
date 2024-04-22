import React, { FunctionComponent } from "react";

type IProps = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle: FunctionComponent<IProps> = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle} className="block md:hidden">
      <div className="toggleIcon" data-ison={isOpen} />
    </button>
  );
};

export default MenuToggle;
