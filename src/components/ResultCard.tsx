interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

const ResultCard = ({ person }: { person: personInterface }) => {
  console.log("the person is ", person);
  return (
    <div className="result_card">
      <h1>
        {person.FirstName} {person.LastName}
      </h1>
      <p>{person.JobTitle}</p>
      <p>{person.Phone}</p>
      <p>{person.Email}</p>
    </div>
  );
};

export default ResultCard;
