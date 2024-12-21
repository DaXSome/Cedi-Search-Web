"use client";

import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import { useEffect } from "react";
import "@algolia/autocomplete-theme-classic";
import { useRouter } from "next/navigation";
import { searchClient } from "@/lib/utils";

const SearchBar = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window != "undefined") {
      autocomplete({
        container: "#autocomplete",
        placeholder: "Search for products",
        onSubmit({ state }) {
          const { query } = state;

          router.push(`/search?query=${query}`);
        },
        getSources({ query }) {
          return [
            {
              sourceId: "products",
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "products",
                      params: {
                        query,
                        hitsPerPage: 5,
                      },
                    },
                  ],
                });
              },
              templates: {
                item({ item, components, html }) {
                  return html`<a href="/product/${item.slug}" class="aa-ItemWrapper">
                    <div class="aa-ItemContent">
                      <div class="aa-ItemIcon aa-ItemIcon--alignTop">
                        <img
                          src="${(item.images as string[])[0]}"
                          alt="${item.name}"
                          width="40"
                          height="40"
                        />
                      </div>
                      <div class="aa-ItemContentBody">
                        <div class="aa-ItemContentTitle">
                          ${components.Highlight({
                            hit: item,
                            attribute: "name",
                          })}
                        </div>
                      </div>
                    </div>
                  </a>`;
                },
              },
            },
          ];
        },
      });
    }
  }, []);

  return (
    <div>
      <div key="autocomplete" id="autocomplete"></div>
    </div>
  );
};

export default SearchBar;
