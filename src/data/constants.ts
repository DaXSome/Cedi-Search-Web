export const CURRENT_HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cedi-search.vercel.app/";

export const SEARCH_SUGGESTION_SERVICE_URL =
  "https://cedi-search-search-suggestion-service.vercel.app";

export const SEARCH_SERVICE_URL = "https://cedi-search-search-service.fly.dev";
