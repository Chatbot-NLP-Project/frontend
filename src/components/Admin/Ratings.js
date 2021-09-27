import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import React from "react";
import Sidebar2 from "./Sidebar2";
import Table from "./Table";
// import { Link } from "react-router-dom";

function Rating() {
  return (
    <>
      <Box
        width="100%"
        // borderStyle="solid"
        // borderColor="gray.600"
        // borderWidth="5px"
        h="900px"
        mt="75px"
        position="absolute"
      >
          <Sidebar2 />
        <Flex
          width="70%"
          ml="30%"
          borderStyle="solid"
          // borderColor="red"
          // borderWidth="5px"
          h="100%"
          position="relative"
          mt="-885px"
        >
          <Center>
            <Flex
            mt="0%"
            width="0%" 
            ml="0%"
            bg="#F0F0F0"
            >
              <Table />
            </Flex>
          </Center>
        </Flex>
      </Box>
    </>
  );
}

export default Rating;
