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
import {
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
Table
} from "@chakra-ui/react"
import Axios from "axios";
import { Progress } from "@chakra-ui/progress";
import React, { useEffect } from "react";
import Sidebar2 from "./Sidebar2";
// import Table from "./Table";
// import { Link } from "react-router-dom";

function Rating() {
  var feedbacks = JSON.parse(localStorage.getItem("feedbacks"));
  var feedbacks = []
  var result = feedbacks.map((feedback, i) => {
    return (
      <Tr>
        <Td>{i + 1}</Td>
        <Td>{feedback.user_id}</Td>
        <Td>{feedback.chatbot_type}</Td>
        <Td>{feedback.rating}</Td>
        <Td>{feedback.feedback}</Td>
      </Tr>
    );
  });
  
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

            <Flex mt="0%" width="0%" ml="0%" bg="#F0F0F0">
            <Box
    >
      <Table variant="striped" colorScheme="teal" size="lg" ml="135px" mt="20px">
        <TableCaption>Feedbacks for chatbots</TableCaption>
        <Thead>
          <Tr>
            <Th >Number</Th>
            <Th >UserID</Th>
            <Th >Chatbot Type</Th>
            <Th >Rating</Th>
            <Th >Feedback</Th>
          </Tr>
        </Thead>
        <Tbody>
          {result}
        </Tbody>
        <Tfoot>
          <Tr>
          <Th >Number</Th>
            <Th >UserID</Th>
            <Th >Chatbot Type</Th>
            <Th >Rating</Th>
            <Th >Feedback</Th>
          </Tr>
        </Tfoot>
      </Table>
      </Box>
            </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Rating;
