import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Stack, Heading, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaRobot,
} from "react-icons/fa";
import BottomFooter from "../Footer/BottomFooter";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Footer = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <>
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgImage="url('../Healthcare/l5.png')"
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Stack
        marginTop="100px"
        spacing={5}
        w={{ base: "100%", md: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="blue.900"
          textAlign={["center", "center", "left", "left"]}
        >
          Ease of use for everyone
        </Heading>
        <Box alignItems="center" width="50%">
          <Heading
            as="h3"
            size="sm"
            color="blue.900"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            Chatbots are designed in way that it is easy to use for even
            non-experienced users. Chatbots can provide user service at any time
            without any delay. It is huge win for our users. 24/7 Availability.
          </Heading>
        </Box>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="blue.900"
          alignItems="center"
          justifyContent="center"
          top={100}
        >
          100+
        </Heading>
        <Heading
          as="h3"
          size="sm"
          color="blue.900"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          New Users per day
        </Heading>
        <Heading
          as="h3"
          size="xs"
          color="blue.900"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          Do you have any problem? Email US.
        </Heading>
        <Link to="">
          <Button
            color="blue.900"
            colorScheme="blue"
            variant="outline"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            mb={6}
          >
            Learn More
          </Button>
        </Link>
      </Stack>
      
      {/* <Flex
        backgroundColor="red.900"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="80px"
        marginTop="10px"
      >
        <Box
          padding="10px"
          boxSize="40px"
          fontSize="3xl"
          marginRight="50px"
          //   color="white"
        >
          <FaRobot />
        </Box>
        <Heading color="white" fontSize="15px">
          Designed By University of Moratuwa | All Rights Resserved, © 2021
        </Heading>
        <Box fontSize="3xl" color="white" ml="50px" mr="20px">
          <FaFacebook />
        </Box>
        <Box fontSize="3xl" color="white" mr="20px">
          <FaInstagram />
        </Box>
        <Box fontSize="3xl" color="white" mr="20px">
          <FaYoutube />
        </Box>
        <Box fontSize="3xl" color="white" mr="20px">
          <FaTwitter />
        </Box>
      </Flex> */}
      
    </Flex>
    <BottomFooter botName="XYRON"/>
    </>
  );
};

export default Footer;
