import { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <form className="search_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Go!</button>
    </form>
  );
};

export default SearchForm;
