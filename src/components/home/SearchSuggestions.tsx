import { Collapse, List, ListItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface ISuggestionsProps {
  suggestions: string[];
  onClick: (suggestion: string) => void;
}

const SearchSuggestions: FC<ISuggestionsProps> = ({ suggestions, onClick }) => {
  const router = useRouter();

  return (
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
            onClick={() => onClick(suggestion)}
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
  );
};

export default SearchSuggestions;
