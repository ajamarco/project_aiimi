import "./App.scss";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { createContext, useState } from "react";
import CreateNew from "./components/CreateNew";
import Alert from "./components/Alert";

import { dataContext } from "./providers/Context";
import Test from "./components/test";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

function App() {
  const [userData, setUserData] = useState<personInterface[]>([]);
  const addNewCard = (person: personInterface): void => {
    setUserData([...userData, person]);
  };

  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("Error");

  return (
    <dataContext.Provider
      value={{
        showAlert,
        setShowAlert,
        alertText,
        setAlertText,
        userData,
        setUserData,
      }}
    >
      <div className="app">
        <SearchForm handleAddNewCard={addNewCard} />
        <Results data={userData} />
      </div>
      <CreateNew />
      <Alert />
    </dataContext.Provider>
  );
}

export default App;
