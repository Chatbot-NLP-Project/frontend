import { Flex, Heading } from "@chakra-ui/react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../Components/botAvatar";
import BotIcon from "../Components/botIcon";
import GeneralOptions from "../Components/GeneralOptions/GeneralOptions";
import InternetProvider from "../Components/InternetProvider/InternetProvider";
import PackageDetails from "../Components/PackageDetails/PackageDetails";
import PackageTypes from "../Components/PackageTypes/PackageTypes";
import Packages from "../Components/Packagez/Packages";
import Balance from "../Components/Balance/Balance";
import ActivatedPackages from "../Components/ActivatedPackages/ActivatedPackages";
import Calendar from "../Components/Calendar/Calendar";
import LKRValue from "../Components/LKRValue/LKRValue";
import CurrencyValues from "../Components/CurrencyValues/CurrencyValues";
import CryptoPrice from "../Components/CryptoPrice/CryptoPrice";
import CryptoPriceLKR from "../Components/CryptoPriceLKR/CryptoPriceLKR";
import Rating from "../Components/Rating/rating";

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
    currentState: "normal",
    provider: "",
    packageTypes: [],
    packageType: "",
    packages: [],
    package: "",
    selectedPackage: "",
    selectedPackageType: "",
    packageDetails: [],
    user: [], //Get full user
    subject: "",
    activatedPackages: [],
    pricesLKR: [],
    pricesCurrency: [],
    pricesCrypto: [],
    prices: [],
    rating: ''

  },
// widgetName - defines the name of the widget
// widgetFunc - define a function that returns the component. The function must take props and spread it into the component.
// mapStateToProps - defines which state properties you defined in config should be injected into the widget component.
// props - option array of props you want to pass to your component.
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
      mapStateToProps: ["provider"]
    },
    {
      widgetName: "InternetProvider",
      widgetFunc: (props) => <InternetProvider {...props} />,
    },
    {
      widgetName: "packageTypess",
      widgetFunc: (props) => <PackageTypes {...props} />,
      mapStateToProps: ["packageTypes", "provider", "selectedPackageType"]
    },
    {
      widgetName: "packages",
      widgetFunc: (props) => <Packages {...props} />,
      mapStateToProps: ["selectedPackage", "packages", "provider", "packageType"]
    },
    {
      widgetName: "packageDetails",
      widgetFunc: (props) => <PackageDetails {...props} />,
      mapStateToProps: ["packageDetails", "selectedPackage", "provider"]
    },
    {
      widgetName: "balance",
      widgetFunc: (props) => <Balance {...props} />,
      mapStateToProps: ["user"]
    },
    {
      widgetName: "activatedPackages",
      widgetFunc: (props) => <ActivatedPackages {...props} />,
      mapStateToProps: ["activatedPackages"]
    },
    {
      widgetName: "calendar",
      widgetFunc: (props) => <Calendar {...props} />,
      mapStateToProps: ["activatedPackages"]
    },
    {
      widgetName: "LKRValue",
      widgetFunc: (props) => <LKRValue {...props} />,
      mapStateToProps: ["pricesLKR"]
    },
    {
      widgetName: "currencyValues",
      widgetFunc: (props) => <CurrencyValues {...props} />,
      mapStateToProps: ["pricesCurrency"]
    },
    {
      widgetName: "cryptoPrice",
      widgetFunc: (props) => <CryptoPrice {...props} />,
      mapStateToProps: ["pricesCrypto"]
    },
    {
      widgetName: "cryptoPriceLKR",
      widgetFunc: (props) => <CryptoPriceLKR {...props} />,
      mapStateToProps: ["prices"]
    },
    
    {
      widgetName: "rating",
      widgetFunc: (props) => <Rating {...props} />,
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
