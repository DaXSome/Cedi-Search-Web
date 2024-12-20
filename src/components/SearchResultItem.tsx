import React from "react";
import { Hit } from "algoliasearch";
import { ISearchResult } from "@/data/interfaces";

interface SearchResultItemProps {
  hit: Hit<ISearchResult>;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ hit }) => {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
      {hit.images?.[0] && (
        <div className="mb-4">
          <img
            src={hit.images[0]}
            alt={hit.name}
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-gray-800">
        <a href="#" className="text-primary hover:underline">
          {hit.name}
        </a>
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {hit.description || "No description available."}
      </p>

      <div>
        <a
          href={`/product/${hit.slug}`}
          className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-dark transition-colors"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default SearchResultItem;
