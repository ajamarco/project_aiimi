import { createContext, Dispatch, SetStateAction } from "react";

interface personInterface {
  Email: string;
  FirstName: string;
  JobTitle: string;
  LastName: string;
  Phone: string;
  id: string;
}

interface dataInterface {
  showAlert: boolean;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
  alertText: string;
  setAlertText: Dispatch<SetStateAction<string>>;
  //data for the user
  userData: personInterface[];
  setUserData: Dispatch<SetStateAction<personInterface[]>>;
}

export const dataContext = createContext<dataInterface | undefined>(undefined);
