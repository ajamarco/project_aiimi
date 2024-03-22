import "./App.scss";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { useState } from "react";
import CreateNew from "./components/CreateNew";
import Alert from "./components/Alert";

import { dataContext } from "./providers/Context";

// Interface defining the structure of a person object
interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

// App component serving as the root component of the application
function App() {
  // State to manage user data
  const [userData, setUserData] = useState<personInterface[]>([]);

  // State to manage alert visibility
  const [showAlert, setShowAlert] = useState(false);
  // State to manage alert text
  const [alertText, setAlertText] = useState("Error");

  // Rendering the app with context provider
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
        {/* Search form component */}
        <SearchForm />
        {/* Results component */}
        <Results />
      </div>
      {/* Create new component */}
      <CreateNew />
      {/* Alert component */}
      <Alert />
    </dataContext.Provider>
  );
}

export default App;
