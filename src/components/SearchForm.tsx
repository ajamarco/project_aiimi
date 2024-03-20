import React, { useState } from "react";
import SearchResults from "./SearchResults";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <>
      <form className="search_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a user..."
          value={search}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Go!</button>
      </form>
      <SearchResults showResults={search.length > 4 ? true : false} />
    </>
  );
};

export default SearchForm;
