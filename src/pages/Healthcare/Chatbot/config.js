import { Flex, Heading } from "@chakra-ui/react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/botAvatar";
import BotIcon from "../Components/botIcon";
// import Options from "../components/Options/Options";
import Doctors from "../Components/Doctors/doctors";
import CalenderObject from "../Components/Calender/calender";
import CovidLocalCurrent from "../Components/Corona/local";
import CovidLocalToday from "../Components/Corona/localToday";
import CovidGlobalCurrent from "../Components/Corona/global";
import Rating from "../Components/Rating/rating";
import Time from "../Components/Clock/clock";
import Disease from "../Components/Disease/disease";
import Moreinfo from "../Components/Disease/moreInfo";
import Hospital from "../Components/Hospital/hospital";
import NationalClinic from "../Components/Hospital/nationalClinic";
import EyeClinic from "../Components/Hospital/eyeClinic";
import Clinic from "../Components/Hospital/clinic";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hey there 👋👋👋👋Thanks for your interest in XYRON.`
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
    sympthoms: [],
    doctors: [],
    channel: [],
    date: [],
    covidLocalCurrent: [],
    covidLocalToday: [],
    covidGlobalCurrent: [],
    time: [],
    disease: [],
    hospital: [],
    clinic: [],
  },
  widgets: [
    {
      widgetName: "doctors",
      widgetFunc: (props) => <Doctors {...props} />,
      mapStateToProps: ["doctors"],
    },
    {
      widgetName: "calender",
      widgetFunc: (props) => <CalenderObject {...props} />,
    },
    {
      widgetName: "covidLocalCurrent",
      widgetFunc: (props) => <CovidLocalCurrent {...props} />,
      mapStateToProps: ["covidLocalCurrent"],
    },
    {
      widgetName: "covidLocalToday",
      widgetFunc: (props) => <CovidLocalToday {...props} />,
      mapStateToProps: ["covidLocalToday"],
    },
    {
      widgetName: "covidGlobalCurrent",
      widgetFunc: (props) => <CovidGlobalCurrent {...props} />,
      mapStateToProps: ["covidGlobalCurrent"],
    },
    {
      widgetName: "rating",
      widgetFunc: (props) => <Rating {...props} />,
    },
    {
      widgetName: "time",
      widgetFunc: (props) => <Time {...props} />,
      mapStateToProps: ["channel", "date"],
    },
    {
      widgetName: "disease",
      widgetFunc: (props) => <Disease {...props} />,
      mapStateToProps: ["disease"],
    },
    {
      widgetName: "moreinfo",
      widgetFunc: (props) => <Moreinfo {...props} />,
    },
    {
      widgetName: "hospital",
      widgetFunc: (props) => <Hospital {...props} />,
      mapStateToProps: ["hospital"],
    },
    {
      widgetName: "nationalClinic",
      widgetFunc: (props) => <NationalClinic {...props} />,
    },
    {
      widgetName: "eyeClinic",
      widgetFunc: (props) => <EyeClinic {...props} />,
    },
    {
      widgetName: "clinic",
      widgetFunc: (props) => <Clinic {...props} />,
      mapStateToProps: ["clinic"],
    },
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
