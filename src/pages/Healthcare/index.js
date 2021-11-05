import React from "react";
import { Flex, Box, Image, Heading, Stack } from "@chakra-ui/react";
import config from "./Chatbot/config.js";
import MessageParser from "./Chatbot/messageParser.js";
import ActionProvider from "./Chatbot/actionProvider";
import Chatbot from "react-chatbot-kit";
// import "./index.css";
import 'react-chatbot-kit/build/main.css'
import './main.css'
import styled from "styled-components";

function Chat(props) {
  return (
    <Box>
      <Flex
        mt={120}
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
            <Image src="../Healthcare/bot.jpg" size="100%" />
          </Box>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="blue.900"
            textAlign={["center", "center", "left", "left"]}
          >
            XYRON HealthCare Chatbot
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
            Chatbot is built with the latest Artificial Intelligence
            technologies to give you a better experience. 24/7 Available
          </Heading>
        </Stack>
        <Box width="850px">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Chat;
