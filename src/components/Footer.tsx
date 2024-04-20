import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 bg-[#12181f]">
      <div>
        <p className="text-sm text-center">
          Designed and built by Baker Sekitoleko &copy;{" "}
          {`${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
