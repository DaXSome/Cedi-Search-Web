"use client";

import React from "react";
import { InstantSearch, Hits, SearchBox, Configure } from "react-instantsearch";
import Logo from "@/components/Logo";
import FacetSidebar from "@/components/FacetSidebar";
import SearchResultItem from "@/components/SearchResultItem";
import { searchClient } from "@/lib/utils";
import "instantsearch.css/themes/satellite.css";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const params = useSearchParams();

  return (
    <InstantSearch
      searchClient={searchClient}
      initialUiState={{
        products: {
          query: params.get("query")!,
        },
      }}
      indexName="products"
    >
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            <SearchBox />
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 flex">
          <aside className="hidden md:block">
            <FacetSidebar />
          </aside>
          <div className="flex-grow md:ml-8">
            <Configure hitsPerPage={10} />
            <Hits hitComponent={SearchResultItem} />
          </div>
        </main>
      </div>
    </InstantSearch>
  );
};

export default SearchPage;
