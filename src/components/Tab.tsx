import React from "react";

type IProps = {
  label: string;
  country?: string;
};

const Tab: React.FunctionComponent<IProps> = ({ label, country }) => {
  return (
    <div className="text-left">
      <p>{label}</p>
      <p className="opacity-60 text-xs">{country || ""}</p>
    </div>
  );
};

export default Tab;
