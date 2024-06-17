import { ISearchResult } from "@/data/interfaces";
import { SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";
import ResultCard from "./ResultCard";

interface ISearchResultsProps {
  results: ISearchResult[];
}
const SearchResults: FC<ISearchResultsProps> = ({ results }) => {
  return (
    <SimpleGrid gap={"20px"} margin={"40px"} columns={{ base: 1, md: 4 }} spacing={2}>
      {results.map((result) => (
        <ResultCard key={result.slug} {...result} />
      ))}
    </SimpleGrid>
  );
};

export default SearchResults;
