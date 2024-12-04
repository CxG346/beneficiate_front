import React, { ReactNode } from "react";
import "./style.css";
import { AlertProvider } from "../Alert/AlertContext";
import Header from "../Header";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className="modal-container">
    <AlertProvider>
      <Header/>
      {children}
    </AlertProvider>
  </div>;
};

export default Modal;
