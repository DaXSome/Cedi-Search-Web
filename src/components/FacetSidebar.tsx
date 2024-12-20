import React from "react";
import { RefinementList } from "react-instantsearch";

const FacetSidebar = () => {
  return (
    <div className="w-64 p-4 bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter By</h2>
      <div className="mb-4">
        <h3 className="font-medium mb-2">Sources</h3>
        <RefinementList attribute="source" />
      </div>
    </div>
  );
};

export default FacetSidebar;
