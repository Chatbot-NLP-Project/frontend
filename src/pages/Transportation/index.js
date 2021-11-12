import React from "react";
import { Flex, Box, Link, Image, Heading, Stack } from "@chakra-ui/react";
import config from "./Chatbot/config.js";
import MessageParser from "./Chatbot/messageParser.js";
import ActionProvider from "./Chatbot/actionProvider";
import Chatbot from "react-chatbot-kit";
// import "./index.css"
import './main.css'
import 'react-chatbot-kit/build/main.css'
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
          <Box ml="55" w="500px" mb={{ base: 12, md: 0 }}>
            {/* TODO: Make this change every X secs */}
            {/* <Image src="../Healthcare/bot.jpg" size="100%" /> */}
            <Image src="../Transporation/botpt.png" size="100%" />
          </Box>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="blue.900"
            textAlign={["center", "center", "left", "left"]}
          >
            XYRON Transport Chatbot
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
            Chat with XYRON Transport Chatbot and let him know what you are looking for. 
            He will tell you how to get to places. If you have any complaints, just let him know. 
            And of course ask him any information you want to find out. Here are some tips.
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
              🔸 View travelling options (How to go to Galle)
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
              🔸 Make complaint (The bus is moving too slow)
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
              🔸 Make seat reservation (Book tickets online)
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
              🔸 View train schedules (Get train time tables)
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
  );
}

export default Chat;
