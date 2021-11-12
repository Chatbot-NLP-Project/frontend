import React, { useState } from "react";
import { Select, Box } from "@chakra-ui/react";
const EyeClinic = (props) => {
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

    // props.actionProvider.channelDoctor();
  };

  return (
    <Box ml="10%" width="40%" boxShadow="0 0 2px 2px #ceddeb">
      <Select
        value={value}
        onChange={handleChange}
        placeholder="Select Clinic Type"
        isDisabled={disable}
      >
        <option value="Regular Eye">Regular Eye clinics</option>
        <option value="Post Operative">Post Operative Clinics</option>
        <option value="Vitrio-Retinal">Vitrio-Retinal clinic</option>
        <option value="Orbital and Oculoplastic">
          Orbital and Oculoplastic
        </option>
        <option value="Cornea and External Eye Diseases">
          Cornea and External Eye Diseases
        </option>
      </Select>
    </Box>
  );
};

export default EyeClinic;
