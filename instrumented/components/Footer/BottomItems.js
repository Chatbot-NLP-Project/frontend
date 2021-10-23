import { Box, Center, Icon, SimpleGrid, useColorMode } from "@chakra-ui/react";

import React from "react";
import { GiTruck } from "react-icons/gi";
import {
  MdAttachMoney,
  MdCreditCard,
  MdSecurity,
  MdSettings,
} from "react-icons/md";
export default function BottomItems() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 4]} spacing="0px">
      <Box
        bg={colorMode === 'light' ? 'white' : '#101522' }
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <Icon as={MdAttachMoney} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center fontWeight="BOLD">
            Great Value
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
          We offer competitive prices on our 1000 plus product range.
        </Box>
      </Box>
      <Box
        bg={colorMode === 'light' ? 'white' : '#101522' }
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <Icon as={MdCreditCard} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center fontWeight="BOLD">
            Safe Payment
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
          Pay with the world’s most popular and secure payment methods.
        </Box>
      </Box>
      <Box
        bg={colorMode === 'light' ? 'white' : '#101522' }
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <Icon as={MdSecurity} w={20} h={20} />{" "}
        </Center>
        <Box>
          <Center fontWeight="BOLD">
            Shop with Confidence
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
          Our Buyer Protection covers your purchase from click to delivery.
        </Box>
      </Box>
      <Box
        bg={colorMode === 'light' ? 'white' : '#101522' }
        height="250px"
        borderStyle="solid"
        borderColor="#E8E8E8"
        borderWidth="1px"
      >
        <Center>
          <GiTruck size="80px" width="20px" />
        </Center>
        <Box>
          <Center fontWeight="BOLD">
            Country Wide Delivery
          </Center>
        </Box>
        <Box padding="5%" textAlign="center">
        With sites in 5 languages, we ship to over 200 countries & regions.
        </Box>
      </Box>
    </SimpleGrid>
  );
}
