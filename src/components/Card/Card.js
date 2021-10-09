import React, { useEffect, useState } from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  GiAllForOne,
  GiArtificialIntelligence,
  GiBookAura,
  GiBookCover,
  GiBookmark,
  GiBookmarklet,
  GiBookPile,
  GiBookshelf,
  GiBookStorm,
  GiBootKick,
  GiBurningBook,
  GiCartwheel,
  GiCrystalBars,
  GiDeliveryDrone,
  GiEvilBook,
  GiF1Car,
  GiHealthNormal,
  GiNewBorn,
  GiOpenBook,
  GiRuleBook,
  GiSecretBook,
  GiShoppingBag,
  GiShoppingCart,
  GiTrafficCone,
  GiWhiteBook,
} from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Card.elements";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

function Card(props) {
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  function handleChange(x) {
    setIsDark(x);
  }

  useEffect(() => {
    // Update isDark according to the color
    {
      colorMode === "light" ? handleChange(false) : handleChange(true);
    }
  });

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      {/**colorMode === "light" ? "white" : "black"**/}
      <Flex
        p="10px 0 160px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt="100px"
        mb="-80px"
        bg={colorMode === "light" ? "white" : "#101522"}
      >
        <Center>

          <Heading mt="20px" mb="-10px" borderStyle="solid" borderColor="cyan.600" borderWidth="0px 0px 5PX 0PX" bottom as="h2" size="xl">
            Chatbot Domains
          </Heading>

        </Center>
        <PricingWrapper>
          <PricingHeading>{props.heading} </PricingHeading>
          <PricingContainer>
            <PricingCard to="/education">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiSecretBook
                    color={colorMode === "light" ? "#CCCCCC" : "white"}
                  />
                </PricingCardIcon>

                <PricingCardPlan>Education</PricingCardPlan>
                <PricingCardCost>6+</PricingCardCost>
                <PricingCardLength>Features</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Artificial Intelligence
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Best Chatbot in Sri Lanka
                  </PricingCardFeature>
                  <PricingCardFeature>Trending Questions</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary data-testid='Enter1'>Enter</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiHealthNormal
                    color={colorMode === "light" ? "#CCCCCC" : "white"}
                  />
                </PricingCardIcon>
                <PricingCardPlan>HealthCare</PricingCardPlan>
                <PricingCardCost>100+</PricingCardCost>
                <PricingCardLength>Users per day</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Deep Learning</PricingCardFeature>
                  <PricingCardFeature>Fast Responses</PricingCardFeature>
                  <PricingCardFeature>24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary data-testid='Enter2'>Enter</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiF1Car
                    color={colorMode === "light" ? "#CCCCCC" : "white"}
                  />
                </PricingCardIcon>
                <PricingCardPlan>Public Transport</PricingCardPlan>
                <PricingCardCost>24/7</PricingCardCost>
                <PricingCardLength>Service</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Neural Networks</PricingCardFeature>
                  <PricingCardFeature>Newest Technologies</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary data-testid='Enter3'>Enter</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </Flex>
    </IconContext.Provider>
  );
}
export default Card;
