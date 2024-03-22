import React from "react";
import ResultCard from "./ResultCard";
import { useContext } from "react";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

const Results = (data: any) => {
  const contextData = useContext(data);
  console.log("the context data is ", contextData);
  console.log("the data is ", data.data);
  return (
    <div className="results">
      {data?.data?.map((person: personInterface) => {
        return <ResultCard key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Results;
