"use client";

import useGetSuggestions from "@/hooks/useGetSuggestions";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";
import SearchSuggestions from "./SearchSuggestions";

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("query") || "");

  const { suggestions } = useGetSuggestions(query);

  const handleSearch = () => {
    router.push(`/search?query=${query}`);
  };

  return (
    <Fragment>
      <HStack>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus={true}
          placeholder="A world of products"
        />

        <Button
          onClick={handleSearch}
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

      <SearchSuggestions suggestions={suggestions} />
    </Fragment>
  );
};

export default SearchBox;
