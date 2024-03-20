const SearchResults = ({ showResults }: { showResults: boolean }) => {
  return (
    <div className="search_results">
      <div
        className={
          showResults
            ? "search_results__dropdown search_results__dropdown--show"
            : "search_results__dropdown"
        }
      >
        <div className="search_results__dropdown__item">Result 1</div>
        <div className="search_results__dropdown__item">Result 2</div>
        <div className="search_results__dropdown__item">Result 3</div>
      </div>
    </div>
  );
};

export default SearchResults;
