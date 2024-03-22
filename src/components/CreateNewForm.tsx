import { useContext } from "react";
import { dataContext } from "../providers/Context";

const CreateNewForm = ({ showForm }: { showForm: boolean }) => {
  const context = useContext(dataContext);

  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //get the values of the form
    const firstName = (
      document.getElementById("first_name") as HTMLInputElement
    ).value;
    const lastName = (document.getElementById("last_name") as HTMLInputElement)
      .value;
    const jobTitle = (document.getElementById("job_title") as HTMLInputElement)
      .value;
    const phoneNumber = (
      document.getElementById("phone_number") as HTMLInputElement
    ).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;

    //check if any of the fields are empty. if it is, show an alert
    if (
      firstName === "" ||
      lastName === "" ||
      jobTitle === "" ||
      phoneNumber === "" ||
      email === ""
    ) {
      context.setAlertText("Please fill in all fields");
      context.setShowAlert(true);
      return;
    }

    //check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      context.setAlertText("Please enter a valid email");
      context.setShowAlert(true);
      return;
    }

    //create a new user object
    const newUser = {
      FirstName: firstName,
      LastName: lastName,
      JobTitle: jobTitle,
      Phone: phoneNumber,
      Email: email,
    };

    //send the new user object to the backend
    fetch("http://localhost:5000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        context.setUserData([...context.userData, data]);
        //clear the form
        (document.getElementById("first_name") as HTMLInputElement).value = "";
        (document.getElementById("last_name") as HTMLInputElement).value = "";
        (document.getElementById("job_title") as HTMLInputElement).value = "";
        (document.getElementById("phone_number") as HTMLInputElement).value =
          "";
        (document.getElementById("email") as HTMLInputElement).value = "";
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      className="create_new_form"
      style={{ display: showForm ? "grid" : "none" }}
      onSubmit={(e) => handleSubmit(e)}
    >
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
