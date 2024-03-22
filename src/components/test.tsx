import { useContext } from "react";
import { dataContext } from "../providers/Context";

function Test() {
  const context = useContext(dataContext);

  if (!context)
    throw new Error("useContext must be used within a Provider with a value");

  const handleClick = () => {
    context.setShowAlert(!context.showAlert);
  };

  return <button onClick={handleClick}>Toggle Alert</button>;
}

export default Test;
