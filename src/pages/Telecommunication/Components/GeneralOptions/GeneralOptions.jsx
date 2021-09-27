import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "Data Packages",
      handler: props.actionProvider.handleDataPackage,
      id: 1
    },
    { name: "Complaints", handler: () => {}, id: 2 },
    {
      name: "Current Balance",
      handler: props.actionProvider.getCurrentBalance,
      id: 3
    }
  ];
  return <Options options={options} title="General Options" {...props} />;
};

export default GeneralOptions;
