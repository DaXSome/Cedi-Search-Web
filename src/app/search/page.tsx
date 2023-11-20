import SearchBox from "@/components/home/SearchBox";
import ResultCard from "@/components/search/ResultCard";
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

      <div className="mt-5 grid grid-cols-3 gap-2">
        {matches.results.map((result) => (
          <ResultCard key={result.id} {...result} />
        ))}
      </div>
    </Fragment>
  );
};

export default Search;
