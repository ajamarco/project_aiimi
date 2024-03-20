interface SearchResultsProps {
  showResults: boolean;
  data: any[];
}

const SearchResults = ({ showResults, data }: SearchResultsProps) => {
  console.log("the data is ", data);
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
            <div className="search_results__dropdown__item">
              {person.FirstName} {person.LastName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
