import { Button } from "@chakra-ui/button";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaAngrycreative, FaBeer, FaMarker, FaTelegram } from "react-icons/fa";
import "./PackageDetails.css";

const PackageDetails = ({ selectedPackage, provider, setState, packageDetails, actionProvider }) => {
  console.log(packageDetails[0]);

  const activatePackage = () => {
    console.log("provider")
    console.log(provider)

      actionProvider.activateDataPackage(selectedPackage.name, provider);
  }  

  return (
    <div>
      <Box
        // borderColor="red"
        // borderStyle="solid"
        // borderWidth="2px"
        h="320px"
        w="50%"
        bg="#2898EC"
        borderRadius="5px"
        p="10px"
        pl="15px"
      >
        <Heading as="h" size="md" color="white" p="5px" mb={6}>
          {packageDetails[0].name}
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="pink"
            variant="solid"
            onClick={activatePackage}
            ml={5}
          >
            <FaTelegram />
            Activate
          </Button>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Subscription fee
          <Heading as="h6" size="sm" color="white" p="5px">
            Rs. {packageDetails[0].fee}
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Anytime Bundle
          <Heading as="h6" size="sm" color="white" p="5px">
            {packageDetails[0].anytime_data} MB
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Night Time Bonus
          <Heading as="h6" size="sm" color="white" p="5px">
            {packageDetails[0].night_time_data} MB
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          {packageDetails[0].details}
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Validity Period -{packageDetails[0].validity_period} Days
        </Heading>

        <Divider orientation="horizontal" />
      </Box>
    </div>
  );
};

export default PackageDetails;
