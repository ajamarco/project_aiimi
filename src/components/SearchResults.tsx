import { useContext } from "react";
import { dataContext } from "../providers/Context";

interface SearchResultsProps {
  showResults: boolean;
  data: any[];
}

// SearchResults component to display search results dropdown
const SearchResults = ({ showResults, data }: SearchResultsProps) => {
  // Accessing data context
  const context = useContext(dataContext);

  // Throw an error if context is not available
  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  // Function to handle clicking on a search result item
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    // Get the person where id matches the id of the person clicked
    const person = data.find((person) => person.id === id);
    // add person to the user data
    context.setUserData([...context.userData, person]);
  };

  // Rendering the search results dropdown
  return (
    <div className="search_results">
      <div
        className={
          showResults
            ? "search_results__dropdown search_results__dropdown--show"
            : "search_results__dropdown"
        }
      >
        {data.map((person) => {
          return (
            <div
              className="search_results__dropdown__item"
              key={person.id}
              onClick={(e) => handleClick(e, person.id)}
            >
              {person.FirstName} {person.LastName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
