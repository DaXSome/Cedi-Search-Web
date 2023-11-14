import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = async () => {
    const res = await fetch(
      `http://0.0.0.0:8000?query=${query}`,
      // `https://cedi-search-search-suggestion-service.vercel.app?query=${query}`,
      { cache: "no-cache" },
    );

    const suggestions = await res.json();
    setSuggestions(suggestions);
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
