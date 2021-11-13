import React, { useState } from "react";
import Calendar from "react-widgets/Calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import { Box } from "@chakra-ui/react";
import "react-widgets/styles.css";

//  calender widget
const CalenderObject = (props) => {
  const [value, onChange] = useState(new Date());
  const [isDisable, setDisable] = useState(false);
  function selectDate(params) {
    onChange();
    //  call select time funtion in actionprovider and pass user selected data
    props.actionProvider.selectTime(params);
    setDisable(true);
  }

  return (
    <Box
      width="50%"
      ml="3%"
      boxShadow="0 0 2px 2px #ceddeb"
      bg="#f2fcfc"
      borderWidth="1px"
      borderRadius="lg"
      padding="10px"
    >
      <Calendar
        min={value}
        disabled={isDisable}
        onChange={selectDate}
        value={value}
      />
    </Box>
  );
};
export default CalenderObject;
