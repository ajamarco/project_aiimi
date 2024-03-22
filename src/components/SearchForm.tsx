import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { getPersons } from "../api/persons";

// SearchForm component to handle searching for users
const SearchForm = (props: any) => {
  // State to manage the search input value
  const [search, setSearch] = useState("");
  // State to store search results
  const [data, setData] = useState([]);

  // Effect to fetch search results when search term changes
  useEffect(() => {
    // Fetch data only if search term length is greater than 1
    if (search.length > 1) {
      const fetchData = async () => {
        const response = await getPersons(search);
        setData(response);
      };
      fetchData();
    }
  }, [search]);

  // Effect to fetch initial data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPersons(search);
      setData(response);
    };
    fetchData();
  }, []);

  // Handler function to update search state on input change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Save the value of the input field
    const value = e.target.value;
    // Update the search state
    setSearch(value);
  };

  // Handler function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do nothing on form submission for now, since the results show up as you type
  };

  // Rendering the search form and search results
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
      <SearchResults
        showResults={data.length > 0 && search.length > 2}
        data={data}
      />
    </>
  );
};

export default SearchForm;
