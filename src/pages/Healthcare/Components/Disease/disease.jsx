import {
  Box,
  Divider,
  Heading,
  OrderedList,
  ListItem,
} from "@chakra-ui/layout";
import React from "react";

const DiseaseDescription = (props) => {
  // set disease information
  const disease = props.disease[0];
  const description = props.disease[1];
  const precaution_1 = props.disease[2];
  const precaution_2 = props.disease[3];
  const precaution_3 = props.disease[4];

  return (
    <div>
      <Box
        boxShadow="0 0 2px 2px #ceddeb"
        h="100%"
        w="65%"
        bg="#00004d"
        borderRadius="5px"
        p="10px"
        pl="15px"
        ml="10%"
      >
        <Heading as="h" size="md" color="white" p="5px" mb={6}>
          {disease}
        </Heading>

        <Divider orientation="horizontal" />

        <Heading as="h6" size="sm" color="white" p="5px">
          Description
          <Heading as="h6" size="xs" color="white" p="5px">
            {description}
          </Heading>
        </Heading>
        <Divider orientation="horizontal" />

        <Heading as="h6" size="xs" color="white" p="5px">
          Precaution
          <OrderedList>
            <Heading as="h6" size="sm" color="white" p="5px">
              <ListItem>{precaution_1}</ListItem>
              <ListItem>{precaution_2}</ListItem>
              <ListItem>{precaution_3}</ListItem>
            </Heading>
          </OrderedList>
        </Heading>
      </Box>
    </div>
  );
};

export default DiseaseDescription;
