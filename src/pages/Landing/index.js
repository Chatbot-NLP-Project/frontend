import React from "react";

import Footer from "../../components/Sections/Footer";

import {
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../../components/Sections/Header";
export default function Landing() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Header />
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        pt="100px"
        // bgImage="url('../l5.png')"
      >
        <Flex
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
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color={colorMode === "light" ? "blue.900" : "white"}
              textAlign={["center", "center", "left", "left"]}
            >
              Sign Up to chat with XYRON Chatbot
            </Heading>
            <Heading
              as="h3"
              size="sm"
              color={colorMode === "light" ? "blue.900" : "cyan.100"}
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "left", "left"]}
            >
              There are 3 chatbots for 3 domains. Telecommunication service,
              healthcare, and public transport are the 3 services that we
              provide. Chatbots are built with the latest Artificial
              Intelligence technologies to give you a better experience. 24/7
              Available
            </Heading>
            <Flex>
              <Link to="/signup">
                <Button
                  colorScheme="blue"
                  variant="solid"
                  py="4"
                  px="4"
                  lineHeight="1"
                  size="md"
                  marginRight={10}
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/aboutus">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  py="4"
                  px="4"
                  lineHeight="1"
                  size="md"
                >
                  Learn More
                </Button>
              </Link>
            </Flex>
          </Stack>
          <Box
            w={{ base: "80%", sm: "60%", md: "50%" }}
            mb={{ base: 12, md: 0 }}
            right={10}
          >
            {/* TODO: Make this change every X secs */}
            <Image src="../Healthcare/main1.png" size="100%" />
          </Box>
        </Flex>
        <Flex
          align="center"
          justify={{ base: "center", md: "space-around", xl: "space-between" }}
          direction={{ base: "column-reverse", md: "row" }}
          wrap="no-wrap"
          minH="70vh"
          px={8}
          mb={16}
        >
          <Box
            w={{ base: "80%", sm: "60%", md: "50%" }}
            mb={{ base: 12, md: 0 }}
            marginRight="10"
            align="right"
          >
            {/* TODO: Make this change every X secs */}
            <Image src="../imgs/AI9.png" size="100%" />
          </Box>
          <Stack
            spacing={7}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color={colorMode === "light" ? "blue.900" : "white"}
              textAlign={["center", "center", "left", "left"]}
            >
              Light, Fast & Powerful
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
              Chatbots are software applications that use artificial
              intelligence & natural language processing to understand what a
              human wants, and guides them to their desired outcome with as
              little work for the end user as possible. Today, we expect answers
              immediately and we expect that they will be accurate. This can be
              done with chatbots
            </Heading>
            <Flex>
              <Stack
                spacing={4}
                w={{ base: "100%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
              >
                <Image src="../left.png" />
                <Heading
                  as="h3"
                  size="md"
                  color={colorMode === "light" ? "blue.900" : "cyan.100"}
                  fontWeight="bold"
                  textAlign={["center", "center", "left", "left"]}
                >
                  Telecommunication Chatbot
                </Heading>
                <Heading
                  as="h3"
                  size="xs"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                  textAlign={["center", "center", "left", "left"]}
                >
                  This chatbot will let your works easy. You can recharge fast.
                  You can select packages whatever you want. Fast Responses.
                </Heading>
              </Stack>
              <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
                marginLeft={20}
              >
                <Image src="../left.png" />
                <Heading
                  as="h3"
                  size="md"
                  color={colorMode === "light" ? "blue.900" : "cyan.100"}
                  fontWeight="bold"
                  textAlign={["center", "center", "left", "left"]}
                >
                  Healthcare Chatbot
                </Heading>
                <Heading
                  as="h3"
                  size="xs"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                  textAlign={["center", "center", "left", "left"]}
                >
                  Are you sick? Ask our chatbot for help. It will give you
                  necessary advices. Do you want to channel doctors? Then, lets
                  do it
                </Heading>
              </Stack>
            </Flex>
            <Flex>
              <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
              >
                <Image src="../left.png" />
                <Heading
                  as="h3"
                  size="md"
                  color={colorMode === "light" ? "blue.900" : "cyan.100"}
                  fontWeight="bold"
                  textAlign={["center", "center", "left", "left"]}
                >
                  Public Transport Chatbot
                </Heading>
                <Heading
                  as="h3"
                  size="xs"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                  textAlign={["center", "center", "left", "left"]}
                >
                  Do you want to know about train schedules? Do you want to
                  track buses? Here is your chance to do it.
                </Heading>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}