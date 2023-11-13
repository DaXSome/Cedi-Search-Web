import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
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

  return { suggestions };
};

export default useGetSuggestions;
