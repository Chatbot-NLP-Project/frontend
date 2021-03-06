import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import "./local.css";
function local(props) {
  var date = props.covidLocalToday[0];
  var totalCases = props.covidLocalToday[1];
  var totalActiveCases = props.covidLocalToday[2];
  // var recoverCases = props.covidLocalCurrent[3];
  // var deathCases = props.covidLocalCurrent[4];

  console.log(props.covidLocalCurrent);
  return (
    <Box
      boxShadow="0 0 2px 2px #ceddeb"
      borderRadius={5}
      padding="4px"
      width="60%"
      height="auto"
      fontSize="10px"
      bg="#fcf8e6"
    >
      <Flex mb="9px">
        <Box width="80%">
          <Heading size="xs" color="#00004d" ml={2}>
            In Sri Lanka
          </Heading>
        </Box>
        <Box bg="#fcde8b" borderWidth="1px" borderRadius={5}>
          <Heading as="h3" size="xs" color="black" padding="2px" margin="2px">
            Up to {date}
          </Heading>
        </Box>
      </Flex>
      <Flex padding="2px">
        <Box
          bg="#007330"
          color="white"
          borderWidth="1px"
          borderRadius={5}
          padding="4px"
          margin="3px"
          width="50%"
        >
          <Box mr="4px">
            <Heading size="xs" color="white" ml={2}>
              Confirmed corona patients
            </Heading>
          </Box>

          <Box mr="revert">
            <Text size="xs" color="white" ml={2} mb={0}>
              {totalCases}
            </Text>
          </Box>
        </Box>

        <Box
          bg="#40010e"
          color="white"
          borderWidth="1px"
          borderRadius={5}
          padding="4px"
          margin="3px"
          width="50%"
        >
          <Box>
            <Heading as="h3" size="xs" color="white" ml={2}>
              No of death
            </Heading>
          </Box>

          <Box mr="revert">
            <Text as="h3" size="xs" color="white" ml={2}>
              {totalActiveCases}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default local;
