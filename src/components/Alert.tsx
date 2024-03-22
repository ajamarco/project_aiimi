import { useContext, useState, useEffect } from "react";
import { dataContext } from "../providers/Context";

const Alert = () => {
  const context = useContext(dataContext);
  let timeOut = undefined;

  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  const renderAlert = () => {
    timeOut = setTimeout(() => {
      context.setShowAlert(false);
    }, 3000);
    return (
      <div className="alert">
        <p>{context.alertText}</p>
      </div>
    );
  };

  return <>{context.showAlert ? renderAlert() : null}</>;
};

export default Alert;
