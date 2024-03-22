import { useContext } from "react";
import { dataContext } from "../providers/Context";

// CreateNewForm component to handle the creation of new user form
const CreateNewForm = ({ showForm }: { showForm: boolean }) => {
  // Accessing data context
  const context = useContext(dataContext);

  // Throw an error if context is not available
  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Get the values of the form fields
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

    // Check if any of the fields are empty; if so, show an alert
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

    // Check if email is valid using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      context.setAlertText("Please enter a valid email");
      context.setShowAlert(true);
      return;
    }

    // Create a new user object
    const newUser = {
      FirstName: firstName,
      LastName: lastName,
      JobTitle: jobTitle,
      Phone: phoneNumber,
      Email: email,
    };

    // Send the new user object to the backend
    fetch("http://localhost:5000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update user data in context
        context.setUserData([...context.userData, data]);
        // Clear the form fields
        (document.getElementById("first_name") as HTMLInputElement).value = "";
        (document.getElementById("last_name") as HTMLInputElement).value = "";
        (document.getElementById("job_title") as HTMLInputElement).value = "";
        (document.getElementById("phone_number") as HTMLInputElement).value =
          "";
        (document.getElementById("email") as HTMLInputElement).value = "";
      })
      .catch((err) => console.log(err));
  };

  // Rendering the form component
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
