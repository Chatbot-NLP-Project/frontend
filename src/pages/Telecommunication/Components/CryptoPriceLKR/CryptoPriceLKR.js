import React from 'react'
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/layout";

function CryptoPriceLKR({actionProvider, prices}) {
    return (
        <div>
             <Box
        // borderColor="Red"
        borderStyle="solid"
        borderWidth="8px"
        h="360px"
        w="410px"
        rounded="5px"
        boxShadow="lg"
        bg="#F2F5FF"
      >
        <SimpleGrid columns={2} spacing={-2}>
          {/* ##################Bitcoin################## */}
          <Box
            height="80px"
            borderStyle="solid"
            borderWidth="5px"
            boxShadow="md"
            m="10px"
            w="260px"
            bg="#003273"
          >
            <SimpleGrid columns={1} spacing={0}>
              <Box
                height="50px"
                // borderColor="Red"
                // borderStyle="solid"
                // borderWidth="5px"
              >
                <Heading as="h2" size="sm" p="10px" color="white">
                  1 BITCOIN Equals,{" "}
                </Heading>
              </Box>
              <Box height="50px" w="250px" mt="-30px">
                <Text p="10px" color="white">
                  {prices.bitcoin}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box ml="65px" mt="-15px" height="80px">
            <Image
              boxSize="120px"
              objectFit="cover"
              src="imgs/bitcoin.png"
              alt="Bitcoin"
            />
          </Box>
          {/* ##################Ethereum################## */}

          <Box
            bg="white"
            height="80px"
            borderStyle="solid"
            borderWidth="5px"
            boxShadow="md"
            m="10px"
            mt="-10px"
            w="260px"
            bg="#0ce0ff"
          >
            <SimpleGrid columns={1} spacing={0}>
              <Box
                height="50px"
                // borderColor="Red"
                // borderStyle="solid"
                // borderWidth="5px"
              >
                <Heading as="h2" size="sm" p="10px">
                  1 ETHEREUM Equals,{" "}
                </Heading>
              </Box>
              <Box height="50px" w="250px" mt="-30px">
                <Text p="10px">{prices.ethereum}</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box ml="70px" mt="-30px" height="80px">
            <Image
              boxSize="110px"
              objectFit="cover"
              src="imgs/ethereum.png"
              alt="Ethereum"
            />
          </Box>
          {/* ##################Bitcoin Cash################## */}
          <Box
            bg="white"
            height="80px"
            borderStyle="solid"
            borderWidth="5px"
            boxShadow="md"
            m="10px"
            mt="-10px"
            w="260px"
            bg="#003273"
          >
            <SimpleGrid columns={1} spacing={0}>
              <Box
                height="50px"
                // borderColor="Red"
                // borderStyle="solid"
                // borderWidth="5px"
              >
                <Heading as="h2" size="sm" p="10px" color="white">
                  1 BITCOIN CASH Equals,{" "}
                </Heading>
              </Box>
              <Box height="50px" w="250px" mt="-30px">
                <Text p="10px" color="white">
                  {prices.bitcoinCash}
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box ml="89px" mt="-9px" height="80px">
            <Image
              boxSize="70px"
              objectFit="cover"
              src="imgs/Bitcoincash.png"
              alt="Bitcoin Cash"
            />
          </Box>

          {/* ##################Litecoin################## */}
          <Box
            bg="white"
            height="80px"
            borderStyle="solid"
            borderWidth="5px"
            boxShadow="md"
            m="10px"
            mt="-10px"
            w="260px"
            bg="#0ce0ff"
          >
            <SimpleGrid columns={1} spacing={0}>
              <Box
                height="50px"
                // borderColor="Red"
                // borderStyle="solid"
                // borderWidth="5px"
              >
                <Heading as="h2" size="sm" p="10px">
                  1 LITECOIN Equals,{" "}
                </Heading>
              </Box>
              <Box height="50px" w="250px" mt="-30px">
                <Text p="10px">{prices.litecoin}</Text>
              </Box>
            </SimpleGrid>
          </Box>
          <Box ml="70px" mt="-35px" height="80px">
            <Image
              boxSize="120px"
              objectFit="cover"
              src="imgs/litecoin2.png"
              alt="Litecoin"
            />
          </Box>
        </SimpleGrid>
      </Box>
        </div>
    )
}

export default CryptoPriceLKR
