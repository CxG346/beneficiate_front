import React, { createContext, useState, ReactNode } from "react";
import Alert from "./index";

export interface AlertContextProps {
  showAlert: (text: string, type: "success" | "error" | "warning") => void;
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alert, setAlert] = useState<{ text: string; type: "success" | "error" | "warning"; show: boolean }>({
    text: "",
    type: "success",
    show: false,
  });

  const showAlert = (text: string, type: "success" | "error" | "warning") => {
    setAlert({ text, type, show: true });
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000); 
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.show && (
        <Alert
          text={alert.text}
          show={alert.show}
          setShow={(show) => setAlert({ ...alert, show })}
          type={alert.type}
        />
      )}
    </AlertContext.Provider>
  );
};