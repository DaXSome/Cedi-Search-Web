"use client";

import { ISearchResult } from "@/data/interfaces";
import {
  Box,
  Circle,
  Flex,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import ProductStars from "../shared/ProductStars";

const ResultCard: FC<ISearchResult> = ({ name, price, rating, image, slug}) => {
  return (
    <Flex w="full" align="center" justify="center">
      <Link href={`/product/${slug}`}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />

          <Image
            height={"200px"}
            width={"500px"}
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Box
              fontSize="xl"
              fontWeight={"bold"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Box as="span" fontWeight={"bold"}  fontSize="lg">
                ₵
              </Box>
              {price.toFixed(2)}
            </Box>

            <Flex mt="1" justify="space-between" align="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                {name}
              </Box>
            </Flex>

            <Flex justify="space-between" marginTop={3} align="center">
              <ProductStars rating={rating} />
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
};

export default ResultCard;
