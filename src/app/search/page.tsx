import SearchBox from "@/components/home/SearchBox";
import SearchResults from "@/components/search/SearchResults";
import { ISearchResponse } from "@/data/interfaces";
import { Fragment } from "react";

interface IParams {
  searchParams: { query: string };
}

const Search = async (params: IParams) => {
  const { query } = params.searchParams;

  const req = await fetch(`http://localhost:8080/search?query=${query}`, {
    cache: "no-cache",
  });

  const matches = (await req.json()) as ISearchResponse;

  return (
    <Fragment>
      <SearchBox />

      <SearchResults results={matches.results} />
    </Fragment>
  );
};

export default Search;
