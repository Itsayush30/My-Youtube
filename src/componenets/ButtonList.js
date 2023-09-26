import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonList = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <Button name="All" />{" "}
      </Link>
      <Link to="/result/?search_query=Gaming">
        <Button name="Gaming" />
      </Link>
      <Link to="/result/?search_query=Songs">
        <Button name="Songs" />
      </Link>
      <Link to="/result/?search_query=Live">
        <Button name="Live" />
      </Link>
      <Link to="/result/?search_query=Soccer">
        <Button name="Soccer" />
      </Link>
      <Link to="/result/?search_query=Cricket">
        <Button name="Cricket" />
      </Link>
      <Link to="/result/?search_query=Movie">
        <Button name="Movie" />
      </Link>
      <Link to="/result/?search_query=Comedy">
        <Button name="Comedy" />
      </Link>
      <Link to="/result/?search_query=Thriller">
        <Button name="Thriller" />
      </Link>
      <Link to="/result/?search_query=Cooking">
        <Button name="Cooking" />
      </Link>
    </div>
  );
};

export default ButtonList;
