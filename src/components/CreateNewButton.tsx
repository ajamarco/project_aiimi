const CreateNewButton = ({
  setShowFormHandler,
}: {
  setShowFormHandler: () => void;
}) => {
  // Function to handle button click event
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Calling the setShowFormHandler function received as prop
    setShowFormHandler();
  };

  // Rendering the button component
  return (
    <div className="create_new_button">
      <button className="create_new_button__button" onClick={handleClick}>
        New User +{" "}
      </button>
    </div>
  );
};

export default CreateNewButton;
