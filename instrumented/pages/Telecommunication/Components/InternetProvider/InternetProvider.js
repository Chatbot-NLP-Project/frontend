import React from "react";

import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const mobitel = () => {
    props.actionProvider.handleProvider("Mobitel");
  }
  const dialog = () => {
    props.actionProvider.handleProvider("Dialog");
  }
  const hutch = () => {
    props.actionProvider.handleProvider("Hutch");
  }
  const airtel = () => {
    props.actionProvider.handleProvider("Airtel");
  }
  const options = [
    {
      name: "Mobitel",
      handler: mobitel,
      id: 1,
    },
    {
        name: "Dialog",
        handler: dialog,
        id: 2,
      },
    {
      name: "Airtel",
      handler: airtel,
      id: 3,
    },
    {
      name: "Hutch",
      handler: hutch,
      id: 4,
    },
  ];
  return <Options options={options} title="Select Internet Service Provider" {...props} />;
};

export default GeneralOptions;
