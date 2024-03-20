import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import { getPersons } from "../api/persons";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

const SearchForm = (props: any) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search.length > 1) {
      const fetchData = async () => {
        const response = await getPersons(search);
        setData(response);
      };

      fetchData();
    }
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPersons(search);

      setData(response);
    };

    fetchData();
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //save the value of the input field
    const value = e.target.value;
    // Update the search state
    setSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleResultClick = (person: personInterface) => {
    props.handleAddNewCard(person);
    setSearch("");
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
      <SearchResults
        showResults={data.length > 0 && search.length > 2}
        data={data}
        handleResultClick={handleResultClick}
      />
    </>
  );
};

export default SearchForm;
