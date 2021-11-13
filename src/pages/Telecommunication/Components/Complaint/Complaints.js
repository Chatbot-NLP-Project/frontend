import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
function ViewComplaints({ complaints, ActionProvider }) {
  console.log(complaints);

  var result;

  result = complaints.map((complaint,i) => {
      return(
    <Tr>
      <Td >{i+1}</Td>
      <Td>{complaint.isp}</Td>
      <Td>{complaint.subject}</Td>
      <Td>{complaint.message}</Td>
      <Td>{complaint.complain_date}</Td>
    </Tr>)
  });
  return (
    <div>
      <Table variant="striped" colorScheme="teal" size="sm">
        <TableCaption>Your Complaints</TableCaption>
        <Thead>
          <Tr>
            <Th >Number</Th>
            <Th >ISP</Th>
            <Th>Subject</Th>
            <Th>Message</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {result}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th >Number</Th>
            <Th>ISP</Th>
            <Th>Subject</Th>
            <Th>Message</Th>
            <Th>Date</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
}

export default ViewComplaints;
