import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import "./local.css";
function local(props) {
  var date = props.covidGlobalCurrent[0];
  var totalCases = props.covidGlobalCurrent[1];
  var newCases = props.covidGlobalCurrent[2];
  var deathCases = props.covidGlobalCurrent[3];
  var newdeathCases = props.covidGlobalCurrent[4];

  var recoverCases = props.covidGlobalCurrent[5];

  console.log(props.covidGlobalCurrent);
  return (
    <Box
      boxShadow="0 0 2px 2px #ceddeb"
      borderRadius={5}
      padding="4px"
      width="60%"
      height="48%"
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
        <Box>
          <Box
            bg="#b58b02"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
            margin="3px"
          >
            <Box>
              <Heading as="h3" size="xs" color="white" ml={2}>
                Confirmed corona patients
              </Heading>
            </Box>

            <Box>
              <Text as="h3" size="xs" color="white" ml={2}>
                {totalCases}
              </Text>
            </Box>
          </Box>
          <Box
            bg="#0202c7"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
            // height="100px"
            margin="3px"
          >
            <Box>
              <Heading as="h3" size="xs" color="white" ml={2}>
                Number of infections today
              </Heading>
            </Box>

            <Box>
              <Text as="h3" size="xs" color="white" ml={2}>
                {newCases}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            bg="#350140"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
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
          <Box
            bg="#b52c02"
            color="white"
            borderWidth="1px"
            borderRadius={5}
            // padding="5px"
            // height="100px"
            margin="3px"
          >
            <Box>
              <Heading as="h3" size="xs" color="white" ml={2}>
                Today no of Deaths
              </Heading>
            </Box>

            <Box>
              <Text as="h3" size="xs" color="white" ml={2}>
                {newdeathCases}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          bg="#019443"
          color="white"
          borderWidth="1px"
          borderRadius={5}
          padding="4px"
          width="40%"
          margin="3px"
        >
          <Box mr="4px">
            <Heading size="xs" color="white" ml={2}>
              Recovered patients
            </Heading>
          </Box>

          <Box mr="revert">
            <Text size="xs" color="white" ml={2} mb={0}>
              {recoverCases}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default local;
