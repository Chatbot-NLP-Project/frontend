import React from "react";
import { Flex, Box, Link, Image, Heading, Stack, Center } from "@chakra-ui/react";
import config from "./Chatbot/config.js";
import MessageParser from "./Chatbot/messageParser.js";
import ActionProvider from "./Chatbot/actionProvider";
import Chatbot from "react-chatbot-kit";
import "./index.css";
import styled from "styled-components";

function Chat(props) {
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
          color="blue.900"
          textAlign={["center", "center", "left", "left"]}
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
              <Image src="../telecommunication/tel.png" size="100%" />
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
              This chatbot will let your works easy. You can recharge fast. You
              can select packages whatever you want. Fast Responses.
            </Heading>
          </Stack>
          <Box>
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
