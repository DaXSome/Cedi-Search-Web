import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = async () => {
    try {
      const res = await fetch(`http://0.0.0.0:8000?query=${query}`, {
        cache: "no-cache",
      });

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
