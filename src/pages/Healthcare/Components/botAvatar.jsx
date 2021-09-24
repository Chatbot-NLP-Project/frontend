import { Flex, Img } from "@chakra-ui/react";
import React from "react";

const BotAvatar = () => {
  return (
    <Flex align="center">
      <Img ml="1.5rem" src="../logo2.png" alt="logo" h="40px" w="40px" />
    </Flex>
  );
};

export default BotAvatar;
