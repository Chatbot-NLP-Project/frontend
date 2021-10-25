import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

const MoreInfo = (props) => {
  const handleClick = () => {
    console.log("Sandaruwan");
    var msg = props.actionProvider.createChatBotMessage("Ok sure", {
      widget: "disease",
    });
    props.actionProvider.setChatbotMessage(msg);
  };
  return (
    <Box ml="10%" w="40%" bg="#00004d" borderRadius="5px" p="10px" pl="15px">
      <Heading as="h" size="sm" color="white" p="5px" mb={6}>
        Do you want to see more details
      </Heading>
      <Button
        // bg="white"
        // variant="outline"
        mt="4px"
        ml="2px"
        variant="solid"
        borderRadius="30px"
        size="sm"
        onClick={handleClick}
      >
        see more!
      </Button>
    </Box>
  );
};

export default MoreInfo;
