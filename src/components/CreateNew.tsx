import { useState } from "react";
import CreateNewForm from "./CreateNewForm";
import CreateNewButton from "./CreateNewButton";

const CreateNew = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="create_new">
      <CreateNewForm showForm={showForm} />
      <CreateNewButton />
    </div>
  );
};

export default CreateNew;
