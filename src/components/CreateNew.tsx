import { useState } from "react";
import CreateNewForm from "./CreateNewForm";
import CreateNewButton from "./CreateNewButton";

const CreateNew = () => {
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
