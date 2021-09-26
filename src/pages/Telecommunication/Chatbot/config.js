import { Flex, Heading } from "@chakra-ui/react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/botAvatar";
import BotIcon from "../Components/botIcon";
import Doctors from "../Components/Doctors/doctors";
// import CalenderObject from "../Components/Calender/calender";
import GeneralOptions from "../Components/GeneralOptions/GeneralOptions";
import InternetProvider from "../Components/InternetProvider/InternetProvider";
import PackageTypes from "../Components/PackageTypes/packageTypes";
import Packages from "../Components/Packages/Packages";
import Airport from "../Components/AirportSelector/AirportSelector";
// Widgets are components that create you own and then you register them in the config
// because we want the widget to be decorated with some things that only the chatbot can give us


const config = {
  initialMessages: [
    createChatBotMessage("Hey there 👋👋👋👋"),
    createChatBotMessage(
      `I am XYRON. I'm here to guide you. Thanks for your interest in XYRON.
  Here are some options.`,
      { 
        widget: "options",
        delay: 500, 
      }
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
    provider: "",
    packageTypes: [],
    packageType: "",
    packages: [],
    package: ""

  },
// widgetName - defines the name of the widget
// widgetFunc - define a function that returns the component. The function must take props and spread it into the component.
// mapStateToProps - defines which state properties you defined in config should be injected into the widget component.
// props - option array of props you want to pass to your component.
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "InternetProvider",
      widgetFunc: (props) => <InternetProvider {...props} />,
    },
    {
      widgetName: "packageTypes",
      widgetFunc: (props) => <PackageTypes {...props} />,
      mapStateToProps: ["packageTypes", "provider"]
    },
    {
      widgetName: "packages",
      widgetFunc: (props) => <Packages {...props} />,
      mapStateToProps: ["packages", "packageType"]
    },
    {
      widgetName: "airport",
      widgetFunc: (props) => <Airport {...props} />,
    },

    
    // {
    //   widgetName: "doctors", //Name that we give to refer to it
    //   widgetFunc: (props) => <Doctors {...props} />, //returns the component that we created 
    //   mapStateToProps: ["doctors"], //tells to chatbot which state we want to give to this component
    // }
    
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
