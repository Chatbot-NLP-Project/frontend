import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import "./local.css";
function local(props) {
  var date = props.covidLocalCurrent[0];
  var totalCases = props.covidLocalCurrent[1];
  var totalActiveCases = props.covidLocalCurrent[2];
  var recoverCases = props.covidLocalCurrent[3];
  var deathCases = props.covidLocalCurrent[4];

  console.log(props.covidLocalCurrent);
  return (
    <Box
      boxShadow="0 0 2px 2px #ceddeb"
      borderRadius={5}
      padding="4px"
      width="60%"
      height="44%"
      fontSize="10px"
    >
      <Flex mb="9px">
        <Box>
          <Heading size="xs" color="#00004d" ml={2}>
            In Sri Lanka
          </Heading>
        </Box>
        <Box ml="30%" bg="#fcde8b" borderWidth="1px" borderRadius={5}>
          <Heading as="h3" size="xs" color="black" padding="2px" margin="2px">
            Up to {date}
          </Heading>
        </Box>
      </Flex>
      <Flex padding="2px">
        <Box
          bg="orange"
          color="white"
          borderWidth="1px"
          borderRadius={5}
          padding="4px"
          width="40%"
          margin="3px"
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
          bg="red"
          color="white"
          borderWidth="1px"
          borderRadius={5}
          padding="4px"
          width="40%"
          margin="3px"
        >
          <Box>
            <Heading as="h3" size="xs" color="white" ml={2}>
              Patients receiving treatment at the moment
            </Heading>
          </Box>

          <Box mr="revert">
            <Text as="h3" size="xs" color="white" ml={2}>
              {totalActiveCases}
            </Text>
          </Box>
        </Box>
        <Box>
          <Box
            bg="#019443"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
            margin="3px"
          >
            <Box>
              <Heading as="h3" size="xs" color="white" ml={2}>
                Recovered patients
              </Heading>
            </Box>

            <Box>
              <Text as="h3" size="xs" color="white" ml={2}>
                {recoverCases}
              </Text>
            </Box>
          </Box>
          <Box
            bg="#520223"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
            // height="100px"
            margin="3px"
          >
            <Box>
              <Heading as="h3" size="xs" color="white" ml={2}>
                No of Deaths
              </Heading>
            </Box>

            <Box>
              <Text as="h3" size="xs" color="white" ml={2}>
                {deathCases}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default local;
