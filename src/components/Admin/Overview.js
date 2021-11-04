import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import {
  Badge,
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import React from "react";
import Sidebar2 from "./Sidebar1";
import Table from "./Table";
import "./Overview.css";
import { useColorMode } from "@chakra-ui/color-mode";
import { Td, Tr } from "@chakra-ui/table";
import Axios from "axios";
import { useEffect } from "react";
// import { Link } from "react-router-dom";

function Rating() {
  const { colorMode, toggleColorMode } = useColorMode();
  Axios.get("https://xyrontelecom.azurewebsites.net/getFeedbacks").then((response) => {
    localStorage.setItem("feedbacks", JSON.stringify(response.data.feedbacks));

    // localStorage.setItem("feedbacks2", JSON.stringify(result));
  });
  useEffect(() => {
    Axios.get("https://xyrontelecom.azurewebsites.net/getNumberOfUsers").then((response) => {
      localStorage.setItem(
        "numberOfUsers",
        JSON.stringify(response.data.numberOfUsers)
      );
    });
  }, []);
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
          mt="-895px"
          bg="#F0F0F0"
          // w={{ base: "70%", md: "60%" }}
          // justify={{ base: "center", md: "space-around", xl: "space-between" }}
          // direction={{ base: "column-reverse", md: "row" }}
        >
          <img className="overview" src="overview.png" alt="Create Account" />
          <Grid
            templateColumns={["repeat(0, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]}
            templateRows={["repeat(2, 1fr)", "repeat(0, 1fr)"]}
            gap={9}
            mt="20px"
            // justify={{ base: "center", md: "space-around", xl: "space-between" }}
            // direction={{ base: "column-reverse", md: "row" }}
          >
            <Box
              width="300px"
              ml="140px"
              borderStyle="solid"
              borderColor="#F0F0F0"
              borderWidth="2px"
              h="150px"
              rounded="15px"
              bg={colorMode === "light" ? "white" : "#363740"}
            >
              <Center mt="20px">
                <Text
                  fontSize="3xl"
                  color={colorMode === "light" ? "#999A9F" : "#999A9F"}
                >
                  Number of Users
                </Text>
              </Center>
              <Center mt="10px">
                <Text
                  fontSize="3xl"
                  color=""
                  color={colorMode === "light" ? "#1A365D" : "white"}
                >
                  {JSON.parse(localStorage.getItem("numberOfUsers"))}
                </Text>
              </Center>
            </Box>
            <Box
              width="300px"
              ml="60px"
              borderStyle="solid"
              borderColor="#F0F0F0"
              borderWidth="2px"
              h="150px"
              mt={["-40", "0", "0"]}
              rounded="15px"
              bg={colorMode === "light" ? "white" : "#363740"}
            >
              <Center mt="20px">
                <Text fontSize="3xl" color="#999A9F">
                  Your Name
                </Text>
              </Center>
              <Center mt="10px">
                <Text
                  fontSize="3xl"
                  color={colorMode === "light" ? "#1A365D" : "white"}
                >
                  {JSON.parse(localStorage.getItem("user"))["first_name"]}
                </Text>
              </Center>
            </Box>
          </Grid>
          {/* <Box
            width="300px"
            ml="30%"
            borderStyle="solid"
            borderColor="red"
            borderWidth="5px"
            h="200px"
            > 
            
            </Box> */}
          <img className="form-img" src="main1.png" alt="Overview" />
          <img className="rectangle" src="Rectangle.png" alt="Overview" />
        </Flex>
      </Box>
    </>
  );
}

export default Rating;
