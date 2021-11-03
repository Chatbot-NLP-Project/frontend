import { Button } from "@chakra-ui/button";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaAngrycreative, FaBeer, FaMarker, FaTelegram } from "react-icons/fa";


const PackageDetails = ({ user, setState, packageDetails, actionProvider }) => {


  return (
    <div>
      <Box
        // borderColor="red"
        // borderStyle="solid"
        // borderWidth="2px"
        h="340px"
        w="50%"
        bg="#2898EC"
        borderRadius="5px"
        p="10px"
        pl="15px"
      >
        <Heading as="h" size="md" color="white" p="5px" mb={6}>
          {user.first_name} {user.last_name}
        </Heading>

        <Divider orientation="horizontal" />
        <Heading as="h6" size="xs" color="white" p="5px">
          Phone number
          <Heading as="h6" size="sm" color="white" p="5px">
            {user.phone_number}
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Current Balance
          <Heading as="h6" size="sm" color="white" p="5px">
            Rs. {user.current_balance}
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Anytime Data
          <Heading as="h6" size="sm" color="white" p="5px">
            {user.anytime_data} MB
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Night Time Data
          <Heading as="h6" size="sm" color="white" p="5px">
            {user.night_time_data} MB
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />
        <Heading as="h6" size="xs" color="white" p="5px">
          4G Data
          <Heading as="h6" size="sm" color="white" p="5px">
            {user["4g_data"]} MB
          </Heading>
        </Heading>

        <Divider orientation="horizontal" />

      </Box>
    </div>
  );
};

export default PackageDetails;
