import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { liteClient as algoliasearch } from "algoliasearch/lite";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!,
);
