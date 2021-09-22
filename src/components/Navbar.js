import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Button,
  useColorMode,
  IconButton,
  ReactRouterLink,
  Img,
  Icon,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
// import Axios from "axios";

function Navbar(props) {
  var his = useHistory();
  const MenuItems = ({ children }) => (
    <Button
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      colorScheme="teal.500"
      variant="link"
      color={colorMode === "light" ? "#1D2B36" : "cyan.100"}
    >
      {children}
    </Button>
  );

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();

  function handleLogOut() {
    // Axios.get("http://localhost:5000/customer/logout").then((response) => {
    //   return <Redirect to='/' />
    // })
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      pt="1.0rem"
      bg={colorMode === "light" ? "#DCE3FA" : "#101522"}
      color="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="10000"
    >
      <Flex align="center" mr={10}>
        <Img ml="1.5rem" src="../logo2.png" alt="logo" h="80px" w="80px" />
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          XYRON
        </Text>
      </Flex>

      <IconButton
        display={{ base: "block", md: "none" }}
        variant="outline"
        colorScheme="cyan"
        icon={<HamburgerIcon />}
        onClick={handleToggle}
        mr="20px"
      />

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        pl="20px"
      >
        <MenuItems>
          <Link as={ReactRouterLink} to="/">
            Home
          </Link>
        </MenuItems>
        <MenuItems>
          {props.Auth.userID === 1 ? (
            <Link as={ReactRouterLink} to="/sellerdashboard/1">
              Dashboard
            </Link>
          ) : (
            <Link as={ReactRouterLink} to="/customerdashboard">
              Dashboard
            </Link>
          )}
        </MenuItems>
        <MenuItems>
          {props.Auth.userID === 1 ? (
            <Link as={ReactRouterLink} to="/sellerHome">
              Seller Home
            </Link>
          ) : (
            <Link as={ReactRouterLink} to="/">
              About Us
            </Link>
          )}
        </MenuItems>
        <MenuItems>
          <Link as={ReactRouterLink} to="/">
            Help
          </Link>
        </MenuItems>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {props.Auth.userID === 1 || !props.Auth.isLoggedIn ? null : (
          <Link as={ReactRouterLink} to="/cart">
            <IconButton
              aria-label="Call Segun"
              size="lg"
              icon={<Icon as={FiShoppingCart} w={8} h={8} />}
              mr={{ base: "5px", md: "20px" }}
              variant="ghost"
              color={colorMode === "light" ? "cyan.800" : "cyan.100"}
            />
          </Link>
        )}

        <IconButton
          aria-label="Call Segun"
          size="md"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          mr={{ base: "5px", md: "20px" }}
          variant="ghost"
          color={colorMode === "light" ? "#1EB39A" : "cyan.100"}
          onClick={toggleColorMode}
        />
        <a href="/signin">
          {props.Auth.isLoggedIn ? (
            <Button
              type="button"
              border="1px"
              variant="ghost"
              mr="1.5rem"
              color={colorMode === "light" ? "#1EB39A" : "cyan.100"}
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          ) : (
            <Button
              type="button"
              border="1px"
              variant="ghost"
              mr="1.5rem"
              color={colorMode === "light" ? "#1EB39A" : "cyan.100"}
            >
              Log In
            </Button>
          )}
        </a>
      </Box>

      <Box
        w="100%"
        h="5px"
        b="0px"
        mt="10px"
        bg={colorMode === "light" ? "blue.900" : "blue"}
      />
    </Flex>
  );
}

export default Navbar;
