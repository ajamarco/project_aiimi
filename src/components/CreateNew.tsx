import { useState, useContext } from "react";
import CreateNewForm from "./CreateNewForm";
import CreateNewButton from "./CreateNewButton";
import { dataContext } from "../providers/Context";

const CreateNew = () => {
  const data = useContext(dataContext);
  console.log("checking data from creatednew", data);
  const [showForm, setShowForm] = useState(false);
  const setShowFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="create_new">
      <CreateNewForm showForm={showForm} />
      <CreateNewButton setShowFormHandler={setShowFormHandler} />
    </div>
  );
};

export default CreateNew;
