"use client";
import React from "react";
import smoothscroll from "smoothscroll-polyfill";

type IProps = React.AllHTMLAttributes<HTMLAnchorElement> & {
  offset?: number;
};

const Anchor: React.FC<IProps> = ({ offset, ...props }) => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById("active");
    element?.removeAttribute("id");
    element?.classList.remove(...["text-blue-500", "border-b-2"]);
    event.currentTarget.classList.add(
      ...["text-blue-500", "border-b-2", "border-b-blue-500"]
    );
    event.currentTarget.setAttribute("id", "active");

    const id = event.currentTarget.getAttribute("href")?.slice(1);

    if (id) {
      const section = document.getElementById(id);
      let offsetTop = window.scrollY;
      if (section) {
        offsetTop = offsetTop + section.getBoundingClientRect().top;
      }

      if (offset) {
        offsetTop = offsetTop - offset;
      }

      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return <a {...props} onClick={onClick} />;
};

export default Anchor;
