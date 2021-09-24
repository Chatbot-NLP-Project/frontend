import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  useColorMode,
  IconButton,
  useDisclosure,
  ReactRouterLink,
  Center,
  Text,
  Square,
  VStack,
  StackDivider,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  TableCaption,
  CircularProgress,
  Badge,
  Progress,
  Divider,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// sidebar nav config

function Sidebar(props) {
  return (
    <>
      <Box
        width="100%"
        borderStyle="solid"
        borderColor="gray.600"
        borderWidth="0px"
      >
        <Box width="100%">
          <VStack
            divider={<StackDivider borderColor="gray.500" />}
            spacing={5}
            align="stretch"
          >
            <Link as={ReactRouterLink} to="/">
              <Button
                h="50px"
                w="100%"
                _hover={{
                  background: "gray.800",
                  color: "white",
                  transitionDuration: "0.6s",
                }}
                rounded="box"
                boxShadow="dark-lg"
                colorScheme="gray.600"
              >
                <Center>Notification Bar</Center>
              </Button>
            </Link>

            <Link as={ReactRouterLink} to="/">
              <Button
                h="50px"
                w="100%"
                _hover={{
                  background: "gray.800",
                  color: "white",
                  transitionDuration: "0.6s",
                }}
                rounded="box"
                boxShadow="dark-lg"
                colorScheme="gray.600"
              >
                Change Password
              </Button>
            </Link>
            <Button
              h="50px"
              w="100%"
              _hover={{
                background: "gray.800",
                color: "white",
                transitionDuration: "0.6s",
              }}
              rounded="box"
              boxShadow="dark-lg"
              colorScheme="gray.600"
            >
              Forgot PIN
            </Button>

            <Divider orientation="horizontal" />
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
