import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { Box } from "@chakra-ui/react";
export default function MyComponent(props) {
  const [rating, setRating] = useState(0);
  // initial rating value
  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
    props.actionProvider.rateHandle(rate);
    // Some logic
  };

  return (
    <Box
      ml="10%"
      boxShadow="0 0 2px 2px #ceddeb"
      bg="#f2fcfc"
      width="33%"
      borderWidth="1px"
      borderRadius="5px"
    >
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </Box>
  );
}
