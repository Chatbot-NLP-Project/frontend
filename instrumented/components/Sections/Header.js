import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 6, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show] = React.useState(false);
  //   const toggleMenu = () => setShow(!show);

  return (
    <Flex
      zIndex="100"
      position="fixed"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={4}
      bg="#DCE3FA"
      // backgroundImage="url('../l8.png')"
      // backgroundRepeat="no-repeat"
      {...props}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor="blue.50"
      borderWidth="100%"
    >
      <Flex>
        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          pl="20px"
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/how">Dashborad</MenuItem>
          <MenuItem to="/faetures">Contaxt Us</MenuItem>

          <Image
            boxSize="35px"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            width="100px"
            src="../Healthcare//l4.png"
            left="46%"
          />

          <MenuItem to="/signup" isLast>
            <Button
              colorScheme="primary"
              variant="outline"
              // py="4"
              // px="4"
              marginTop="2px"
              size="md"
              justifyContent="flex-end"
              right={10}
              position="absolute"
              top={2}
            >
              Sign in
            </Button>
          </MenuItem>
        </Box>
      </Flex>
      {/* <Box w="100%" h="5px" b="0px" mt="10px" bg="blue" /> */}
    </Flex>
  );
};

export default Header;
