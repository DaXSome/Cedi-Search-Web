export const CURRENT_HOST =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://cedi-search.vercel.app/";

export const API_URL = "https://cedi-search-api.vercel.app"
