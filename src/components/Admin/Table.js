import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Box
  } from "@chakra-ui/react"
import Axios from "axios";

import React, { useEffect } from "react";


function Tables(result) {
  
  

  return (
    <div>
    <Box
    >
      <Table variant="striped" colorScheme="teal" size="lg" mt="-400px">
        <TableCaption>Feedbacks for chatbots</TableCaption>
        <Thead>
          <Tr>
            <Th >Number</Th>
            <Th >UserID</Th>
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
            <Th >Rating</Th>
            <Th >Feedback</Th>
          </Tr>
        </Tfoot>
      </Table>
      </Box>
    </div>
  );
}

export default Tables;
