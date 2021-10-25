import React, { useState } from "react";
import Calendar from "react-widgets/Calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import { Box } from "@chakra-ui/react";
import "react-widgets/styles.css";
const CalenderObject = (props) => {
  const [value, onChange] = useState(new Date());
  const [isDisable, setDisable] = useState(false);
  function selectDate(params) {
    onChange();
    props.actionProvider.viewDataPackagesByDate(params);
    setDisable(true);
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
      <Calendar
      format='DD/MM/YYYY'
        // min={value}
        disabled={isDisable}
        onChange={selectDate}
        value={value}
      />
    </Box>
  );
};
export default CalenderObject;
