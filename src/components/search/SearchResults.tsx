import { ISearchResult } from "@/data/interfaces";
import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import ResultCard from "./ResultCard";

interface ISearchResultsProps {
  results: ISearchResult[];
}
const SearchResults: FC<ISearchResultsProps> = ({ results }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
      {results.map((result) => (
        <ResultCard key={result.id} {...result} />
      ))}
    </SimpleGrid>
  );
};

export default SearchResults;
