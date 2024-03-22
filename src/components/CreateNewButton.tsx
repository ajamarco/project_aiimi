const CreateNewButton = ({
  setShowFormHandler,
}: {
  setShowFormHandler: () => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowFormHandler();
  };

  return (
    <div className="create_new_button">
      <button className="create_new_button__button" onClick={handleClick}>
        New User +{" "}
      </button>
    </div>
  );
};

export default CreateNewButton;
