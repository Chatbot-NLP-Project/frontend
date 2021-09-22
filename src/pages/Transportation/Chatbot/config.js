import { Flex, Heading } from "@chakra-ui/react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/botAvatar";
import BotIcon from "../Components/botIcon";
// import Options from "../components/Options/Options";
import Methods from "../Components/Methods/Methods";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey there 👋👋👋👋
  Thanks for your interest in XYRON.
  Before we begin can I have your name ?`,
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
    sympthoms: [], // delete this
    from: '',
    to: '',
    method: '',
    schedule: '',
    methods: [],
    schedules: [],
  },
  widgets: [
      // {
      //   widgetName: "options",
      //   widgetFunc: (props) => <Options {...props} />,
      // },
  ],
  //   widgets: [
  //     {
  //       widgetName: "options",
  //       widgetFunc: (props) => <Options {...props} />,
  //     },
  //     {
  //       widgetName: "predictDisease",
  //       widgetFunc: (props) => <Options {...props} />,
  //     },
  //   ],
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
