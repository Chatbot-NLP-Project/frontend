import { Flex, Heading } from "@chakra-ui/react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/botAvatar";
import BotIcon from "../Components/botIcon";
// import Options from "../components/Options/Options";
import Methods from "../Components/Methods/methods";
import Links from "../Components/Links/links";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey there 😊👋👋👋
  Thanks for your interest in XYRON.
  Tell me what you wanna know? 🚌🚆⌚`,
      { widget: "options" }
    ),
  ],
  botName: "XYRON",
  customComponents: {
    header: () => (
      <Flex backgroundColor="#00004d">
        <BotIcon />
        <Heading
          ml="10px"
          as="h3"
          size="sm"
          color="#ffffff"
          fontWeight="bold"
          lineHeight={1.5}
          mt="25px"
        >
          XYRON
        </Heading>
      </Flex>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  state: {
    currentState: ["normal"],
    from: [],
    to: [],
    mode: [],
    modeDescription: [],
    schedule: [],
    complaintDetails: [],
    methods: [],
    schedules: [],
    links: [],
  },
  widgets: [
    {
      widgetName: "methods",
      widgetFunc: (props) => <Methods {...props} />,
      mapStateToProps: ["methods"],
    },
    {
      widgetName: "links",
      widgetFunc: (props) => <Links {...props} />,
      mapStateToProps: ["links"],
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#E3F6FC",
      color: "black",
    },
    userMessageBox: {
      backgroundColor: "#E3F6FC",
    },
  },
};

export default config;
