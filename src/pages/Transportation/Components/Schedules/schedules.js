import React from "react";

import {
  Box,
  Heading,
  StackItem,
  Stack,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";

const Schedules = (props) => {
  const renderSchedule = () => {
      return (
        <StackItem >
          <Box
            boxShadow="0 0 2px 2px #ceddeb"
            bg="#f0f4f5"
            width="40%"
            borderWidth="1px"
            borderRadius="5px"
            padding="10px"
            // mr={40}
            mb={1}
          >
            <Flex>
              <Heading as="h3" size="sm" color="#0a1a30" ml={3}>
                View Train Schedules
              </Heading>
            </Flex>
            <Heading as="h4" size="xs" color="#186273" ml={3}>
              Visit: <Link color="teal.500" href='https://eservices.railway.gov.lk/schedule/homeAction.action?lang=en'>
                railway.gov.lk
                </Link>
            </Heading>
            {/* <Link to="/home">
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
                onClick={selectDate}
              >
                Channel
              </Button>
            </Link> */}
          </Box>  
        </StackItem>
      );
  };

  return <Stack ml="10%">{renderSchedule()}</Stack>;
};

export default Schedules;
