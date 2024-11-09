import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Box as="a" href={"/about"}>
            About
          </Box>
        </Stack>

        <Text fontSize="lg" color="gray.500">
          Powered by <Link href="https://daxsome.owbird.site">DaXSome</Link>
        </Text>

        <Text>
          &copy; {new Date().getFullYear()} Cedi Search. All rights reserved
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
