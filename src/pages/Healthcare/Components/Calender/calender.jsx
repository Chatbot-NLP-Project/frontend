import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import { Box } from "@chakra-ui/react";

const CalenderObject = (props) => {
  const [value, onChange] = useState(new Date());
  function selectDate(params) {
    onChange();
    props.actionProvider.selectTime(params);
  }

  return (
    <Box
      width="50%"
      ml="3%"
      boxShadow="0 0 2px 2px #ceddeb"
      bg="#f2fcfc"
      // width="40%"
      borderWidth="1px"
      borderRadius="lg"
      padding="10px"
    >
      <Calendar onChange={selectDate} value={value} />
    </Box>
  );
};
export default CalenderObject;
