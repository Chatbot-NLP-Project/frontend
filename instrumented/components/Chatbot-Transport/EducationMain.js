import {
  Button,
  ReactRouterLink,
  Link,
  Box,
  Text,
  Heading,
  Flex,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import React from "react";
import {
  GiArtificialIntelligence,
  GiChatBubble,
  GiRobotGolem,
  GiRobotGrab,
  GiRobotLeg,
  GiShoppingCart,
} from "react-icons/gi";

import "./EducationMain.css";

function EducationMain() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="hero-container">
      <Flex>
        <video src="/videos/AI2.mp4" autoPlay loop muted />
      </Flex>
      <Heading as="h1" size="4xl">
        <Text color={colorMode === "light" ? "white" : "white"}>
          PUBLIC TRANSPORTATION DOMAIN
        </Text>
      </Heading>

      <p color={colorMode === "light" ? "white" : "black"}>What do you want to know?</p>
      <div>
        <Center mt="20px">
          <GiRobotGolem
            className="cart-icon"
            size="150px"
            color={colorMode === "light" ? "white" : "black"}
          />
        </Center>
        <a href="http://localhost:3000/chatbotpt">
          <Box
            as="button"
            p={4}
            color={colorMode === "light" ? "white" : "black"}
            fontWeight="bold"
            borderRadius="15px"
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, black, #00bbcc)"
                : "linear(to-r, white, blue.600)"
            }
            _hover={{
              bgGradient: "linear(to-r, red, white)",
            }}
          >
            ASK FROM XYRON
          </Box>
        </a>
      </div>
    </div>
  );
}

export default EducationMain;
