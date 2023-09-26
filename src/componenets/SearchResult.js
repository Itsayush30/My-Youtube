import React, { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../Utils/contants";
import SearchResultsCard from "./SearchResultsCard";
import ButtonList from "./ButtonList";
import { Link, useSearchParams } from "react-router-dom";

// Import your SearchShimmer component here
import SearchShimmer from "./SearchShimmer";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");

  useEffect(() => {
    getResults();
  }, []);

  const [searchResult, setSearchResult] = useState([]);

  const getResults = async () => {
    const data = await fetch(SEARCH_RESULT_API + searchTerm);
    const json = await data.json();
    console.log(json.items);
    setSearchResult(json.items);
  };

  return (
    <div className="mx-48">
      {" "}
      <div className="mx-space-y-2 mb-2 md:h-14 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg">
        <ButtonList />
      </div>
      {/* Conditional rendering */}
      {searchResult.length === 0 ? (
        <SearchShimmer /> // Render the shimmer component when searchResult is empty
      ) : (
        searchResult.map((r) => (
          <Link to={"/watch?v=" + r.id.videoId}>
            <SearchResultsCard info={r} />
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchResult;
