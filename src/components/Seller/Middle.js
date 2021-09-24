import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  IconButton,
  Tooltip,
  Avatar,
  Center,
  Badge,
  Progress,
  GridItem,
  Heading,
  SimpleGrid,
  useColorMode,
  Grid,
} from "@chakra-ui/react";

import { AvatarBadge } from "@chakra-ui/react";
import "./Middle.css";
import { FaDollarSign } from "react-icons/fa";
import { Money, MoneyOff } from "@material-ui/icons";
import { GiCartwheel, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";

function Middle(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <div className="dashboard">
        <Box
          borderStyle="solid"
          borderColor="gray.800"
          boarderRadius="200px"
          mt="0px"
          pl="20px"
          pr="20px"
          pt="250px"
          h="460px"
          mb="20px"
          // bg="linear-gradient( blue -80%, white 100%);"
          
        >
          <Box
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            p="10px"
            pt="30px"
            mt="-120px"
            borderRadius="20px"
            bg={colorMode === "light" ? "white" : "cyan.900"}
          >
            <Center mb="5px" mt="10px">
              <Avatar bg="red.500">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
              </Avatar>
            </Center>

            <Box h="50px" mb="70px">
              <Center>
                <Text  style={{ textTransform: "uppercase" }}>
                  {props.user.firstName} {props.user.lastName}
                </Text>
              </Center>
              <Progress
                colorScheme="green"
                size="xs"
                mr="45%"
                ml="45%"
                mb="5px"
                isIndeterminate
              />
              <Center mb="10px">
                <Badge variant="solid" colorScheme="green">
                  Online
                </Badge>
              </Center>
            </Box>

            <GridItem>
              <Box
                bg={colorMode === "light" ? "cyan.900" : "cyan.50"}
                borderRadius="20px"
                color="white"
                m="20px"
                p="50px"
              >
                <SimpleGrid columns={5} spacing={5} pt="10px" pb="10px">
                  <Box textAlign="center">
                    <Heading
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                      as="h4"
                      size="lg"
                    >
                      {" "}
                      Rs. {props.overview.totalRevenue}
                    </Heading>
                    <Text
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      {" "}
                      Total Revenue
                    </Text>
                  </Box>

                  <Box textAlign="center">
                    <Heading
                      as="h4"
                      size="lg"
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      {" "}
                     Rs. {props.overview.todayRevenue}
                    </Heading>

                    <Text
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      Today Revenue
                    </Text>
                  </Box>

                  <Box textAlign="center">
                    <Heading
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                      as="h4"
                      size="lg"
                    >
                      {" "}
                      {props.overview.awaitingShipment}
                    </Heading>
                    <Text
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      Awaiting for shipment
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Heading
                      as="h4"
                      size="lg"
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      {" "}
                      {props.overview.awaitingDelivery}
                    </Heading>
                    <Text
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      Awaiting for delivery
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Heading
                      as="h4"
                      size="lg"
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      {" "}
                      {props.overview.userCount}
                    </Heading>

                    <Text
                      textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
                    >
                      Today New Users
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </GridItem>
           
          </Box>
        </Box>

       
      </div>
    </>
  );
}

export default Middle;
