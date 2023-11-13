"use client";

import {
  Box,
  Button,
  Collapse,
  Container,
  HStack,
  Heading,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = async () => {
    const res = await fetch(
      `https://cedi-search-search-suggestion-service.vercel.app?query=${query}`,
      { cache: "no-cache" },
    );

    const suggestions = await res.json();
    setSuggestions(suggestions);
  };

  useEffect(() => {
    if (query && query.length >= 4) {
      getSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);
  return (
    <Fragment>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Cedi{" "}
            <Text as={"span"} color={"green.400"}>
              Search
            </Text>
          </Heading>
          <HStack>
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus={true}
              placeholder="A world of products"
            />

            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Search
            </Button>
          </HStack>

          <Collapse in={suggestions.length > 0} animateOpacity>
            <List
              bg="white"
              border="1px"
              borderColor="gray.200"
              boxShadow="lg"
              maxH="60"
              overflowY="auto"
              rounded="md"
              p={2}
              width="100%"
              zIndex={1}
            >
              {suggestions.map((suggestion, index) => (
                <ListItem
                  key={index}
                  p={2}
                  cursor="pointer"
                  _hover={{
                    background: "green.50",
                  }}
                >
                  {suggestion}
                </ListItem>
              ))}
            </List>
          </Collapse>
        </Stack>
      </Container>
    </Fragment>
  );
}
