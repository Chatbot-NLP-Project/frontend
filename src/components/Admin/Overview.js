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
// import { Link } from "react-router-dom";

function Rating() {
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
        >
        <img className="overview" src="overview.png" alt="Create Account" />
          <Grid templateColumns="repeat(2, 0fr)" gap={6} mt ="20px">
            <Box
              width="300px"
              ml="40%"
              borderStyle="solid"
              borderColor="#F0F0F0"
              borderWidth="2px"
              h="150px"
              rounded="15px"
              bg="white"
            >
              <Center mt= "20px">
                <Text fontSize="3xl" color="#999A9F">Number of Users</Text>
              </Center>
              <Center mt="10px">
                <Text fontSize="3xl" color="">18</Text>
              </Center>
            </Box>
            <Box
              width="300px"
              ml="30%"
              borderStyle="solid"
              borderColor="#F0F0F0"
              borderWidth="2px"
              h="150px"
              rounded="15px"
              bg="white"
            >
              <Center mt= "20px">
                <Text fontSize="3xl" color="#999A9F">Your Name</Text>
              </Center>
              <Center mt="10px">
                <Text fontSize="3xl" color="">Chalindu</Text>
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
          <img className="rectangle" src="rectangle.png" alt="Overview" />
        </Flex>
      </Box>
    </>
  );
}

export default Rating;
