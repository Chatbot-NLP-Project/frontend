/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React from "react";

import Footer from "../../components/Sections/Footer";
import styled from "styled-components";

import {
  Box,
  Heading,
  Stack,
  Image,
  Flex,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Header from "../../components/Sections/Header";
import "./index.css";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const Card = styled(Link)`
  //   background: #000080;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.4);
  width: 220px;
  text-decoration: none;
  border-radius: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
  height: 350px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export default function DSelection() {
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
        // bgImage="url('../b2.png')"
      >
        <Box marginTop="10%">
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color={colorMode === "light" ? "blue.900" : "white"}
          >
            Chatbot Domains
          </Heading>
        </Box>
        <Container>
          <Card className="domain-link">
            <Box
              h={"100px"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
              w="fit-content"
            >
              <Image
                src="../Healthcare/d1.png"
                size="100%"
                layout={"fill"}
                w="fit-content"
              />
            </Box>
            <a
              className="domain-link"
              href="https://xyronchatbot.herokuapp.com/healthcare"
            >
              <Stack marginTop={10} marginTop={50}>
                <Heading
                  fontSize="20px"
                  color={colorMode === "light" ? "blue.900" : "white"}
                >
                  Healthcare
                </Heading>
                <Heading
                  as="h3"
                  size="sm"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                >
                  Do you want to channel a doctor?
                </Heading>
                <Text color={"gray.500"}></Text>

                <Button>Chat now</Button>
              </Stack>
            </a>
          </Card>
          <Card>
            <Box h={"100px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image src="../Healthcare/d2.png" size="100%" layout={"fill"} />
            </Box>
            <a href="https://xyronchatbot.herokuapp.com/telecommunication">
              <Stack marginTop={10} marginTop={50}>
                <Heading
                  fontSize="20px"
                  color={colorMode === "light" ? "blue.900" : "white"}
                >
                  Telecommuncation{" "}
                </Heading>
                <Heading
                  as="h3"
                  size="sm"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                >
                  Do you want to view and buy a data package?{" "}
                </Heading>

                <Text color={"gray.500"}></Text>

                <Button>Chat now</Button>
              </Stack>
            </a>
          </Card>
          <Card>
            <Box h={"100px"} mt={-6} mx={-6} mb={6} pos={"relative"}>
              <Image src="../Healthcare/d3.png" size="100%" layout={"fill"} />
            </Box>
            <a href="https://xyronchatbot.herokuapp.com/transport">
              <Stack marginTop={10} marginTop={50}>
                <Heading
                  fontSize="20px"
                  color={colorMode === "light" ? "blue.900" : "white"}
                >
                  Public Transport{" "}
                </Heading>
                <Heading
                  as="h3"
                  size="sm"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                >
                  View today train and bus schedules.{" "}
                </Heading>

                <Text color={"gray.500"}></Text>
                <Button>Chat now</Button>
              </Stack>
            </a>
          </Card>
          <Card>
            <Box
              h={"100px"}
              mt={-6}
              mx={-6}
              mb={6}
              padding="50px"
              pos={"relative"}
            >
              <Image
                src="../Healthcare/d4.png"
                // // size="100%"
                // justifyContent="center"
                // alignItems="center"
              />
            </Box>
            <a href="https://xyronchatbot.herokuapp.com/profile">
              <Stack marginTop={10} marginTop={50}>
                <Heading
                  fontSize="20px"
                  color={colorMode === "light" ? "blue.900" : "white"}
                >
                  Dashboard
                </Heading>
                <Heading
                  as="h3"
                  size="sm"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                >
                  Personalize your settings using your dashboard.{" "}
                </Heading>

                <Text color={"gray.500"}></Text>
                <Button>Chat now</Button>
              </Stack>
            </a>
          </Card>
        </Container>
      </Flex>
      <Footer />
    </Box>
  );
}
