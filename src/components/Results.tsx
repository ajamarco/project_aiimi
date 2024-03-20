import React from "react";
import ResultCard from "./ResultCard";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

/*data example
[
    {
        "id": "5",
        "FirstName": "Gavin",
        "LastName": "Miles",
        "JobTitle": "UX Designer",
        "Phone": "07881 987554",
        "Email": "gmiles@test.com"
    }
] */

const Results = (data: any) => {
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
