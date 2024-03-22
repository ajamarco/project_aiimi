import "./App.scss";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { useState } from "react";
import CreateNew from "./components/CreateNew";
import Alert from "./components/Alert";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

function App() {
  const [data, setData] = useState<personInterface[]>([]);
  const addNewCard = (person: personInterface): void => {
    setData([...data, person]);
  };

  return (
    <>
      <div className="app">
        <SearchForm handleAddNewCard={addNewCard} />
        <Results data={data} />
      </div>
      <CreateNew />
      <Alert />
    </>
  );
}

export default App;
