export const getPersons = async (searchValue: string | undefined) => {
  const response = await fetch("http://localhost:5000/persons");
  const data = await response.json();

  if (searchValue) {
    //data contains a field called FirstName and another called LastName. Check if the searchValue is included in either of these fields
    const filteredData = data.filter(
      (person: { FirstName: string; LastName: string }) =>
        person.FirstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        person.LastName.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filteredData;
  } else return data;
};
