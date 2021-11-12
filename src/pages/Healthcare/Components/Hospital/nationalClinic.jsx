import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
const NationalClinic = (props) => {
  const [value, setValue] = useState("");
  const [disable, setDisable] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    sendDate(event.target.value);
    setDisable(true);
  };
  const sendDate = (t) => {
    console.log(t);
    console.log(props);
    props.actionProvider.getNationalClinic(t);
  };

  return (
    <Box ml="10%" width="40%" boxShadow="0 0 2px 2px #ceddeb">
      <Select
        value={value}
        onChange={handleChange}
        placeholder="Select Clinic Type"
        isDisabled={disable}
      >
        <option value="General Surgery">General Surgery</option>
        <option value="Plastic Surgery">Plastic Surgery</option>
        <option value="ENT Surgery">ENT Surgery</option>
        <option value="Neurosurgery">Neurosurgery</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Neurology">Neurology</option>
      </Select>
    </Box>
  );
};

export default NationalClinic;
