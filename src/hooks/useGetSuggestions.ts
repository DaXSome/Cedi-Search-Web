import { API_URL } from "@/data/constants";
import { useEffect, useState } from "react";

const useGetSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const controller = new AbortController();

  const getSuggestions = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}?query=${query}`, {
        cache: "no-cache",
        signal: controller.signal,
      });

      const suggestions = await res.json();
      setSuggestions(suggestions);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getSuggestions();
    } else {
      setSuggestions([]);
    }

    return () => controller.abort();
  }, [query]);

  return { suggestions, isLoading };
};

export default useGetSuggestions;
