import React from "react";

type IProps = {
  technologies: string[];
};

const Technologies: React.FC<IProps> = ({ technologies }) => {
  return (
    <div className="text-sm flex gap-3 flex-wrap items-center">
      {technologies.map((item, index) => (
        <span
          key={index}
          className="bg-gray-200 px-2 rounded-md text-black font-bold"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Technologies;
