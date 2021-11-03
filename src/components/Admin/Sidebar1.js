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

function Sidebar2(props) {
  return (
    <>
      
      <Box
          width="30%"
          borderStyle="solid"
          // borderColor="gray.600"
          // borderWidth="5px"
          h="100%"
          bg="#363740"
        >
          <Center mb="5px" mt="30px" paddingTop="40px">
            <Avatar bg="blue.500">
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Center>
          <Box h="50px" mb="70px">
            <Center>
              <Text style={{ textTransform: "uppercase" }}>
                {/* {props.user.firstName} {props.user.lastName} */}
              </Text>
            </Center>

            <Progress
              colorScheme="green"
              size="xs"
              mr="25%"
              ml="25%"
              mb="8px"
              mt="8px"
              isIndeterminate
            />
            <Center mb="10px">
              <Badge variant="solid" colorScheme="green">
                Online
              </Badge>
            </Center>
          </Box>
          <Box width="100%" mt="30px">
            <VStack
              divider={<StackDivider borderColor="gray.500" />}
              spacing={8}
              align="stretch"
            >
              {/* <Link as={ReactRouterLink} to="/"> */}
              <Button
                h="50px"
                w="100%"
                _hover={{
                  background: "black",
                  color: "white",
                  transitionDuration: "0.6s",
                }}
                rounded="box"
                boxShadow="dark-lg"
                colorScheme="teal"
              >
                <Center>Overview</Center>
              </Button>
              {/* </Link> */}

              <a href="https://xyronchatbot.herokuapp.com/rating"> 
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
                Ratings
              </Button>
              </a>
              {/* </Link> */}
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
               
              </Button>

              <Divider orientation="horizontal" />
            </VStack>
          </Box>
        </Box>
    </>
  );
}

export default Sidebar2;
