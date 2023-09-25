import React, { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../Utils/contants";
import SearchResultsCard from "./SearchResultsCard";
import ButtonList from "./ButtonList";
import { Link, useSearchParams } from "react-router-dom";

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
      {searchResult?.map((r) => (
        <Link to={"/watch?v=" + r.id.videoId}>
          <SearchResultsCard info={r} />{" "}
        </Link> //if there is watch?v= instead of /watch?v it will take to /result/watch?v
      ))}
    </div>
  );
};

export default SearchResult;
