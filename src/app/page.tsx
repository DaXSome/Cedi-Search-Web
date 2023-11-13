"use client";

import Header from "@/components/home/Header";
import SearchBox from "@/components/home/SearchBox";
import SearchSuggestions from "@/components/home/SearchSuggestions";
import useGetSuggestions from "@/hooks/useGetSuggestions";
import { Box, Container, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const { suggestions } = useGetSuggestions(query);

  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Header />

        <SearchBox query={query} setQuery={setQuery} />

        <SearchSuggestions suggestions={suggestions} />
      </Stack>
    </Container>
  );
}
