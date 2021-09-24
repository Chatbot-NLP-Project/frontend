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
import React from "react";

function Tables() {
  return (
    <div>
    <Box
    >
      <Table variant="striped" colorScheme="teal" size="lg" mt="-400px">
        <TableCaption>Chatbot ratings</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>Number</Th>
            <Th isNumeric>Rating</Th>
            <Th >Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td isNumeric>1</Td>
            <Td isNumeric>4</Td>
            <Td >Good chatbot</Td>
          </Tr>
          <Tr>
            <Td isNumeric>2</Td>
            <Td isNumeric>3</Td>
            <Td >Need improvements. Overall a good chatbot</Td>
          </Tr>
          <Tr>
            <Td isNumeric>3</Td>
            <Td isNumeric>2</Td>
            <Td >Good product</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th isNumeric>Number</Th>
            <Th isNumeric>Rating</Th>
            <Th >Message</Th>
          </Tr>
        </Tfoot>
      </Table>
      </Box>
    </div>
  );
}

export default Tables;
