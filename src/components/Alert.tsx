import { useContext, useState, useEffect } from "react";
import { dataContext } from "../providers/Context";

// Alert component to display alerts based on context
const Alert = () => {
  // Accessing context using useContext hook
  const context = useContext(dataContext);
  // Variable to hold timeout reference
  let timeOut = undefined;

  // If context is not available, throw an error
  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  // Function to render the alert component
  const renderAlert = () => {
    // Setting timeout to hide the alert after 3 seconds
    timeOut = setTimeout(() => {
      context.setShowAlert(false);
    }, 3000);
    // Returning the JSX for the alert
    return (
      <div className="alert">
        <p>{context.alertText}</p>
      </div>
    );
  };

  // Returning JSX to conditionally render the alert component
  return <>{context.showAlert ? renderAlert() : null}</>;
};

export default Alert;
