import { API_URL } from "@/data/constants";
import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const controller = new AbortController();

  const getSuggestions = async () => {
    try {
      const res = await fetch(`${API_URL}?query=${query}`, {
        cache: "no-cache",
        signal: controller.signal,
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

    return () => controller.abort();
  }, [query]);

  return { suggestions };
};

export default useGetSuggestions;
