"use client";

import { ISearchResult } from "@/data/interfaces";
import {
  Box,
  Circle,
  Flex,
  Icon,
  Image,
  Tooltip,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaEye } from "react-icons/fa";
import ProductStars from "../shared/ProductStars";

const ResultCard: FC<ISearchResult> = ({ name, price, rating, image }) => {
  return (
    <Flex w="full" align="center" justify="center">
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

        <Image src={image} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="6">
          <Flex mt="1" justify="space-between" align="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label="View"
              bg="white"
              placement="top"
              color="gray.800"
              fontSize="1.2em"
            >
              <chakra.a href="#" display="flex">
                <Icon as={FaEye} h={7} w={7} alignSelf="center" />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justify="space-between" align="center">
            <ProductStars rating={rating} />
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color="gray.600" fontSize="lg">
                ₵
              </Box>
              {price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ResultCard;
