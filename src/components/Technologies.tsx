import React from "react";

type IProps = {
  technologies: string[];
};

const Technologies: React.FC<IProps> = ({ technologies }) => {
  return (
    <div className="flex gap-5">
      <p>Technologies:</p>
      <div className="text-sm flex gap-3 flex-wrap">
        {technologies.map((item, index) => (
          <span key={index} className="bg-gray-200 py-1 px-2 rounded-md">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
