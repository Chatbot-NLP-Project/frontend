import React, { useState } from "react";

import {
  Box,
  Heading,
  StackItem,
  Stack,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
// import { FaHospital, BsPersonFill } from "react-icons/fa";
// import { IoPersonCircle } from "react-icons/fa";

const Doctors = (props) => {
  const [disable, setDisable] = useState(false);

  const renderDoctor = () => {
    return props.doctors.map((doctor) => {
      function selectDate() {
        props.actionProvider.selectDoctor(props.doctors.indexOf(doctor));
        console.log(props);
        setDisable(true);
      }
      return (
        <StackItem key={doctor.doctorID}>
          <Box
            boxShadow="0 0 2px 2px #ceddeb"
            bg="#f2fcfc"
            width="40%"
            borderWidth="1px"
            borderRadius="5px"
            padding="10px"
            // mr={40}
            mb={1}
          >
            <Flex>
              <Heading as="h3" size="sm" color="#00004d" ml={3}>
                {doctor.name}
              </Heading>
            </Flex>
            <Heading as="h4" size="xs" color="#00004d" ml={3}>
              {doctor.specialty}
            </Heading>
            <Flex>
              <Heading as="h4" size="xs" color="#00004d" ml={3}>
                {doctor.hospital}
              </Heading>
            </Flex>
            <Flex mb="8px">
              <Heading as="h4" size="xs" color="#00004d" ml={3}>
                {doctor.contact}
              </Heading>
            </Flex>
            <Link to="/home">
              <Button
                width="100%"
                colorScheme="blue"
                color="#00004d"
                variant="outline"
                lineHeight="1"
                height="30px"
                padding={1}
                size="md"
                // ml={3}
                mr={3}
                isDisabled={disable}
                onClick={selectDate}
              >
                Channel
              </Button>
            </Link>
          </Box>
        </StackItem>
      );
    });
  };

  return <Stack ml="10%">{renderDoctor()}</Stack>;
};

export default Doctors;
