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
function ActivatedPackages({ activatedPackages, ActionProvider }) {
  console.log(activatedPackages);

  var result;

  result = activatedPackages.map((activatedPackage,i) => {
      return(
    <Tr>
      <Td >{i+1}</Td>
      <Td>{activatedPackage.name}</Td>
      <Td>{activatedPackage.fee}</Td>
      <Td>{activatedPackage.activated_date}</Td>
      <Td>{activatedPackage.validity_period}</Td>
    </Tr>)
  });
  return (
    <div>
      <Table variant="striped" colorScheme="teal" size="sm">
        <TableCaption>Activated Packages</TableCaption>
        <Thead>
          <Tr>
            <Th >Number</Th>
            <Th >Package Name</Th>
            <Th>Package Fee(Rs)</Th>
            <Th>Date</Th>
            <Th>Validity Period</Th>
          </Tr>
        </Thead>
        <Tbody>
          {result}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th >Number</Th>
            <Th>Package Name</Th>
            <Th>Package Fee(Rs)</Th>
            <Th>Date</Th>
            <Th>Validity Period</Th>
          </Tr>
        </Tfoot>
      </Table>
    </div>
  );
}

export default ActivatedPackages;
