import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Results from "./components/Results";

function App() {
  return (
    <div className="app">
      <SearchForm />
      <Results />
    </div>
  );
}

export default App;
