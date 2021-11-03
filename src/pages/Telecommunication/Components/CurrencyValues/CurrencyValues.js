import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/react";

function CurrencyValues({ actionProvider, pricesCurrency }) {
  return (
    <div>
      <Box
        // borderColor="Red"
        borderStyle="solid"
        borderWidth="5px"
        h="340px"
        w="350px"
        rounded="5px"
        boxShadow="lg"
      >
          
        <Heading as="h2" size="md" p="10px" color="#70757A">
          1 United States Dollar equals,
        </Heading>
        <Flex
          // borderColor="Red"
          borderStyle="solid"
          borderWidth="5px"
          h="50px"
          w="322px"
          rounded="5px"
          mt="0px"
          ml="10px"
          bg="#CEDE37"
        >
          <Heading as="h2" size="md" p="10px">
            {pricesCurrency.AuD}
          </Heading>
        </Flex>
        <Flex
          // borderColor="Red"
          borderStyle="solid"
          borderWidth="5px"
          h="50px"
          w="322px"
          rounded="5px"
          mt="5px"
          ml="10px"
          bg="#63B247"

        >
          <Heading as="h2" size="md" p="10px">
            {pricesCurrency.IR}
          </Heading>
        </Flex>
        <Flex
          // borderColor="Red"
          borderStyle="solid"
          borderWidth="5px"
          h="50px"
          w="322px"
          rounded="5px"
          mt="5px"
          ml="10px"
          bg="#1695CE"

        >
          <Heading as="h2" size="md" p="10px">
            {pricesCurrency.SD}
          </Heading>
        </Flex>
        <Flex
          // borderColor="Red"
          borderStyle="solid"
          borderWidth="5px"
          h="50px"
          w="322px"
          rounded="5px"
          mt="5px"
          ml="10px"
          bg="#3E5FAD"

        >
          <Heading as="h2" size="md" p="10px">
            {pricesCurrency.Yuan}
          </Heading>
        </Flex>
        <Flex
          // borderColor="Red"
          borderStyle="solid"
          borderWidth="5px"
          h="50px"
          w="322px"
          rounded="5px"
          mt="5px"
          ml="10px"
          bg="#483290"

        >
          <Heading as="h2" size="md" p="10px">
            {pricesCurrency.Yen}
          </Heading>
        </Flex>
        
      </Box>
      
    </div>
  );
}

export default CurrencyValues;
