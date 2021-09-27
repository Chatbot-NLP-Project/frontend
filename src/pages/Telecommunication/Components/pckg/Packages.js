import React from "react";
import {
  Box,
  Heading,
  StackItem,
  Stack,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";

const GeneralOptions = (props) => {
  const renderPackageType = () => {
    return props.packages.map((pckg) => {
      function selectPackage() {
        console.log("select package type called")
        props.actionProvider.selectPackage(pckg.name, props.packageType);
        console.log(props)

      }
      return (
        <StackItem key={pckg.name}>
          <Box
            boxShadow="0 0 2px 2px #ceddeb"
            bg="#f2fcfc"
            width="40%"
            borderWidth="1px"
            borderRadius="lg"
            padding="10px"
            // mr={40}
            mb={1}
          >
            <h1 className="options-header">"Package"</h1>
            <Flex>
              <Heading as="h3" size="sm" color="#00004d" ml={3}>
                {pckg.name}
              </Heading>
            </Flex>
            <Link to="/home">
              <Button
                width="100%"
                colorScheme="blue"
                color="#00004d"
                variant="outline"
                lineHeight="1"
                height="30px"
                padding={1}
                size="md"
                // ml={3}
                mr={3}
                onClick={selectPackage}
              >
                Continue
              </Button>
            </Link>
          </Box>
        </StackItem>
      );
    });
  };

  return <Stack ml="10%">{renderPackageType()}</Stack>;
};

export default GeneralOptions;
