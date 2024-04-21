import React, { FunctionComponent } from "react";
import Technologies from "./Technologies";

export type IProps = {
  employer: {
    position: string;
    date: string;
    workDone: string[];
    technologies: string[];
  };
};

const Employment: FunctionComponent<IProps> = ({ employer }) => {
  return (
    <div className="pl-5 pt-[20px]">
      <div className="mb-5">
        <p className="font-bold">{employer.position}</p>
        <p className="text-[17px]">{employer.date}</p>
      </div>
      <ul className="list">
        {employer.workDone.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <li>
          <div className="flex gap-5">
            <p>Technologies:</p>
            <Technologies technologies={employer.technologies} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Employment;
