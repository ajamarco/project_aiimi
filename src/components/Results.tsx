import ResultCard from "./ResultCard";
import { useContext } from "react";
import { dataContext } from "../providers/Context";

// Interface defining the structure of a person object
interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

// Results component to display a list of results
const Results = () => {
  // Accessing data context
  const context = useContext(dataContext);

  // Throw an error if context is not available
  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  // Extracting user data from context
  const data = context.userData;

  // Rendering the results with ResultCard component
  return (
    <div className="results">
      {data.map((person: personInterface) => {
        return <ResultCard key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Results;
