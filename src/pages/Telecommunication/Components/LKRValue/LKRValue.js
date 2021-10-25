import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

function LKRValue({ actionProvider, pricesLKR }) {
  return (
    <div>
      <Box
        // borderColor="Red"
        borderStyle="solid"
        borderWidth="5px"
        h="180px"
        w="310px"
        rounded="5px"
        boxShadow="lg"
      >
        <Heading as="h2" size="md" p="10px" color="#70757A">
        1 United States Dollar equals,
        </Heading>
        <Heading as="h2" size="lg" p="10px" >
        {pricesLKR.LKR}
        </Heading>
      </Box>
    </div>
  );
}

export default LKRValue;
