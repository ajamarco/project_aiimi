const CreateNewForm = ({ showForm }: { showForm: boolean }) => {
  return (
    <form className="create_new_form">
      <div className="create_new_form__names">
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
        />
        <input
          type="text"
          name="last_name"
          id="last_name"
          placeholder="Last Name"
        />
      </div>
      <div className="create_new_form__info">
        <input
          type="text"
          name="job_title"
          id="job_title"
          placeholder="Job Title"
        />
        <input
          type="number"
          name="phone_number"
          id="phone_number"
          placeholder="Phone Number"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div className="create_new_form__button">
        <button type="submit">Add New User</button>
      </div>
    </form>
  );
};

export default CreateNewForm;
