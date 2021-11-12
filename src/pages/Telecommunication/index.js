import React from "react";
import { Flex, Box, Link, Image, Heading, Stack, Center } from "@chakra-ui/react";
import config from "./Chatbot/config.js";
import MessageParser from "./Chatbot/messageParser.js";
import ActionProvider from "./Chatbot/actionProvider";
import Chatbot from "react-chatbot-kit";
// import "./index1.css";
// import "../../App.css";
import 'react-chatbot-kit/build/main.css'
import './main.css'
import styled from "styled-components";
import { useColorMode } from "@chakra-ui/color-mode";

function Chat(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        // borderWidth="5px"
        // color="red"
        // bg="tomato"
        boxSize="sm"
        w="100%"
        h="80px"
        marginTop="120px"
      >
        <Center>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          textAlign={["center", "center", "left", "left"]}
          color = {colorMode === "light" ? "blue.900" : "white"}
        >
          XYRON Telecommunication Chatbot
        </Heading>
        </Center>
      </Box>
      <Box>
        <Flex
          mt={-10}
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="no-wrap"
          minH="70vh"
          px={8}
          mb={16}
        >
          <Stack
            spacing={7}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Box w="500px" mb={{ base: 12, md: 0 }}>
              {/* TODO: Make this change every X secs */}
              <Image src="../Telecommunication/tel.png" size="100%" />
            </Box>

            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              This chatbot will make your works easy. This Telecom Chatbot has 8 main functions with 4 additional features. These buttons show those functions. Click those buttons to access each function.
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              ml="50px"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              🔸 Get Data Package Details and Activate (Data Packages)
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              ml="50px"
              textAlign={["center", "center", "left", "left"]}
            >
              🔸 View Currently Activated Packages by Date (View Activated Packages and By Date)
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              ml="50px"
              textAlign={["center", "center", "left", "left"]}
            >
              🔸 Make a Complaint (Complaints)
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              ml="50px"
              textAlign={["center", "center", "left", "left"]}
            >
              🔸 View Your Current Balance (Current Balance)
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              ml="50px"
              textAlign={["center", "center", "left", "left"]}
            >
              🔸 Rate your Chatbot and Give Feedback (Rate Chatbot)
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color="primary.800"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              🔴 If you want to end the conversation, type quit
            </Heading>
          </Stack>
          <Box w="100%">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Chat;
