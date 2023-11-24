"use client";

import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import SearchBox from "@/components/home/SearchBox";
import { Box, Container, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container maxW="3xl" flex="1">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Header />
          <SearchBox />
          <Text fontSize="lg" color="gray.500">
            <span role="img" aria-label="warning">
              ⚠️
            </span>{" "}
            In Beta Mode
          </Text>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
