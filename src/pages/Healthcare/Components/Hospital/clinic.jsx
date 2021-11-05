import React from "react";

import {
  Box,
  Heading,
  StackItem,
  Thead,
  Flex,
  Tr,
  Table,
  Td,
  Divider,
  Tbody,
  Th,
} from "@chakra-ui/react";
// import { FaHospital, BsPersonFill } from "react-icons/fa";
// import { IoPersonCircle } from "react-icons/fa";

const Clinic = (props) => {
  const renderClinic = () => {
    return props.clinic.map((clinic) => {
      return (
        <Tr key={clinic.clinicID}>
          <Td pl="4px" pr="4px" border="1px solid white">
            {clinic.doctor}
          </Td>
          <Td pl="4px" pr="4px" border="1px solid white">
            {clinic.date}
          </Td>
          <Td pl="4px" pr="4px" border="1px solid white">
            {clinic.time}
          </Td>
          <Td pl="4px" pr="4px" border="1px solid white">
            {clinic.place}
          </Td>
          <Td pl="4px" pr="4px" border="1px solid white">
            {clinic.unit}
          </Td>
        </Tr>
      );
    });
  };

  return (
    <Box
      h="auto"
      w="80%"
      bg="#00004d"
      borderRadius="5px"
      p="10px"
      pl="15px"
      boxShadow="0 0 2px 2px #ceddeb"
    >
      <Heading as="h" size="md" color="white" p="5px" mb={6}>
        {props.clinic[0].clinicType}
      </Heading>

      <Divider mb={3} orientation="horizontal" />
      <Table size="sm" color="white">
        <Thead>
          <Tr>
            <Th color="white" pl="4px" pr="4px" border="1px solid white">
              Doctor
            </Th>
            <Th color="white" pl="4px" pr="4px" border="1px solid white">
              Date
            </Th>
            <Th color="white" pl="4px" pr="4px" border="1px solid white">
              Time
            </Th>
            <Th color="white" pl="4px" pr="4px" border="1px solid white">
              Place
            </Th>
            <Th color="white" pl="4px" pr="4px" border="1px solid white">
              Unit
            </Th>
          </Tr>
        </Thead>
        <Tbody>{renderClinic()} </Tbody>
      </Table>
    </Box>
  );
};

export default Clinic;
