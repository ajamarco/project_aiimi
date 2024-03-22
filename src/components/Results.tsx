import ResultCard from "./ResultCard";
import { useContext } from "react";
import { dataContext } from "../providers/Context";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

const Results = () => {
  const context = useContext(dataContext);

  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  const data = context.userData;
  return (
    <div className="results">
      {data.map((person: personInterface) => {
        return <ResultCard key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Results;
