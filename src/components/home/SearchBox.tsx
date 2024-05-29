"use client";

import { CURRENT_HOST } from "@/data/constants";
import useGetSuggestions from "@/hooks/useGetSuggestions";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  chakra,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import SearchSuggestions from "./SearchSuggestions";
import ClipLoader from "react-spinners/ClipLoader";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");

  const { suggestions, isLoading } = useGetSuggestions(query);

  const handleSearch = (searchQuery: string) => {
    if (query) {
      const url = new URL(`/search`, CURRENT_HOST);

      url.searchParams.append("query", searchQuery);

      router.push(url.toString());
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleSearch(query);
  };

  return (
    <chakra.form onSubmit={handleSubmit}>
      <HStack>
        <InputGroup>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus={true}
            placeholder="A world of products"
          />
          <InputRightElement >
            <ClipLoader
              loading={isLoading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </InputRightElement>
        </InputGroup>
        <Button
          type="submit"
          colorScheme={"green"}
          bg={"green.400"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "green.500",
          }}
        >
          Search ✨
        </Button>
      </HStack>

      <SearchSuggestions onClick={handleSearch} suggestions={suggestions} />
    </chakra.form>
  );
};

export default SearchBox;
