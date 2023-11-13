import { Button, HStack, Input } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface ISearchBoxProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const SearchBox: FC<ISearchBoxProps> = ({ query, setQuery }) => {
  return (
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
  );
};

export default SearchBox;
