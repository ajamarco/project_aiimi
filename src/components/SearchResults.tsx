interface SearchResultsProps {
  showResults: boolean;
  data: any[];
  handleResultClick: (person: any) => void;
}

const SearchResults = ({
  showResults,
  data,
  handleResultClick,
}: SearchResultsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    //get the person where id matches the id of the person clicked
    const person = data.find((person) => person.id === id);
    //log the person to the console
    handleResultClick(person);
  };
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
