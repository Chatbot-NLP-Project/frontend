/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
const Hospital = (props) => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    sendDate(event.target.value);
    setDisable(true);
  };
  const sendDate = (t) => {
    var msg;
    console.log(t);
    console.log(props);
    props.actionProvider.setState((state) => ({
      ...state,
      hospital: [t],
    }));
    if (t == "National") {
      msg = props.actionProvider.createChatBotMessage(
        "Please select the clinic type ",
        {
          widget: "nationalClinic",
        }
      );
    } else {
      msg = props.actionProvider.createChatBotMessage(
        "Please select the clinic type ",
        {
          widget: "eyeClinic",
        }
      );
    }

    props.actionProvider.setChatbotMessage(msg);
    // props.actionProvider.channelDoctor();
  };

  return (
    <Box ml="10%" width="40%" boxShadow="0 0 2px 2px #ceddeb">
      <Select
        value={value}
        onChange={handleChange}
        placeholder="Hospital Type"
        isDisabled={disable}
      >
        <option value="National">National Hospital in Colombo</option>
        <option value="Eye">National Eye Hospital</option>
      </Select>
    </Box>
  );
};

export default Hospital;
