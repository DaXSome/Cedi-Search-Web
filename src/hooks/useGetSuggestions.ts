import { SEARCH_SUGGESTION_SERVICE_URL } from "@/data/constants";
import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = async () => {
    try {
      const res = await fetch(
        `${SEARCH_SUGGESTION_SERVICE_URL}?query=${query}`,
        {
          cache: "no-cache",
        },
      );

      const suggestions = await res.json();
      setSuggestions(suggestions);
    } catch (error) {}
  };

  useEffect(() => {
    if (query) {
      getSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return { suggestions };
};

export default useGetSuggestions;
