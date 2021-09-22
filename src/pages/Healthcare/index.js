import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import "./index.css";
import config from "./Chatbot/config.js";
import MessageParser from "./Chatbot/messageParser.js";
import ActionProvider from "./Chatbot/actionProvider";
import Chatbot from "react-chatbot-kit";
function Chat(props) {
  return (
    <Box>
      <Flex>
        {/* <Sidebar1 /> */}
        {/* <SideNav /> */}
        <Box mt={120} borderWidth="1px" borderRadius="lg">
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
