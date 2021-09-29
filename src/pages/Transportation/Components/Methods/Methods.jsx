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
// import { FaHospital, BsPersonFill } from "react-icons/fa";
// import { IoPersonCircle } from "react-icons/fa";

const Methods = (props) => {
  const renderMethod = () => {
    return props.methods.map((method) => {
      // function selectDate() {
      //   props.actionProvider.selectDoctor(props.methods.indexOf(method));
      //   console.log(props);
      // }
      return (
        <StackItem key={method.methodID}>
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
                {method.routeName}
              </Heading>
            </Flex>
            <Heading as="h4" size="xs" color="#186273" ml={3}>
              Route No: {method.routeNo}
            </Heading>
            <Flex>
              <Heading as="h4" size="xs" color="#186273" ml={3}>
                From: {method.from}
              </Heading>
            </Flex>
            <Flex>
              <Heading as="h4" size="xs" color="#186273" ml={3}>
                To: {method.to}
              </Heading>
            </Flex>
            <Flex mb="8px">
              <Heading as="h4" size="xs" color="#186273" ml={3}>
                Fare: {method.fee}
              </Heading>
            </Flex>
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
    });
  };

  return <Stack ml="10%">{renderMethod()}</Stack>;
};

export default Methods;
