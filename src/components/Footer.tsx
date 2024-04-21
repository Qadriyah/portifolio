import React from "react";

const Footer = () => {
  return (
    <footer className="p-3 bg-[#12181f]">
      <div>
        <p className="text-sm text-center">
          &copy; {`${new Date().getFullYear()} Baker Sekitoleko`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
