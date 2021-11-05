import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
const GetTime = (props) => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    sendDate(event.target.value);
    setDisable(true);
  };
  const sendDate = (t) => {
    const cha = {
      id: props.channel[0].doctorID,
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
      name: props.channel[0].name,
      hospital: props.channel[0].hospital,
      date: props.date[0],
      time: t,
    };
    props.actionProvider.channelDoctor(cha);
  };

  return (
    <Box ml="10%" width="40%">
      <Select
        value={value}
        onChange={handleChange}
        placeholder="Select Channeling Time"
        isDisabled={disable}
      >
        <option value="9.00">9.00 AM</option>
        <option value="10.00">10.00 AM</option>
        <option value="11.00">11.00 AM</option>
        <option value="12.00">12.00 PM</option>
        <option value="1.00">1.00 PM</option>
        <option value="2.00">2.00 PM</option>
        <option value="3.00">3.00 PM</option>
      </Select>
    </Box>
  );
};

export default GetTime;
