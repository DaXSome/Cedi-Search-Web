import React from "react";
import { Hit } from "algoliasearch";
import { ISearchResult } from "@/data/interfaces";

interface SearchResultItemProps {
  hit: Hit<ISearchResult>;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ hit }) => {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 w-full">
      <div className="flex gap-3 justify-center">
        {hit.images.map((src) => (
          <div key={src} className="mb-4">
            <img
              src={src}
              alt={hit.name}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 text-gray-800">{hit.name}</h3>

      <div>
        {hit.description.split("\\n").map((desc, index) => (
          <p key={index} className="text-gray-600 text-sm mb-4">
            {desc}
          </p>
        ))}
      </div>

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
