import { useState, useContext } from "react";
import CreateNewForm from "./CreateNewForm";
import CreateNewButton from "./CreateNewButton";
import { dataContext } from "../providers/Context";

// CreateNew component to handle the creation of new items
const CreateNew = () => {
  // Accessing data context
  const data = useContext(dataContext);
  // Logging data for debugging purposes
  console.log("checking data from creatednew", data);
  // State to manage whether the form is shown or not
  const [showForm, setShowForm] = useState(false);

  // Handler function to toggle the display of the form
  const setShowFormHandler = () => {
    setShowForm(!showForm);
  };

  // Rendering CreateNewForm and CreateNewButton components
  return (
    <div className="create_new">
      <CreateNewForm showForm={showForm} />
      <CreateNewButton setShowFormHandler={setShowFormHandler} />
    </div>
  );
};

export default CreateNew;
