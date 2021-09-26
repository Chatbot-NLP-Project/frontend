import React from "react";

import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const mobitel = () => {
    props.actionProvider.handleProvider("Mobitel");
  }
  const options = [
    {
      name: "Mobitel",
      handler: mobitel,
      id: 1,
    },
    {
        name: "Dialog",
        handler: () => {},
        id: 2,
      },
    {
      name: "Airtel",
      handler: () => {},
      id: 3,
    },
    {
      name: "Hutch",
      handler: () => {},
      id: 4,
    },
  ];
  return <Options options={options} title="Service Provider" {...props} />;
};

export default GeneralOptions;
