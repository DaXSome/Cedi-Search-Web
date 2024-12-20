import React from "react";
import { RangeInput, RefinementList } from "react-instantsearch";

const FacetSidebar = () => {
  return (
    <div className=" p-4 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter By</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Sources</h3>
        <RefinementList attribute="source" />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Price</h3>
        <RangeInput attribute="price"  />
      </div>
    </div>
  );
};

export default FacetSidebar;
