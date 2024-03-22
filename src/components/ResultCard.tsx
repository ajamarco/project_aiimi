// Interface defining the structure of a person object
interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

// ResultCard component to display details of a person
const ResultCard = ({ person }: { person: personInterface }) => {
  // Rendering the result card with person details
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
