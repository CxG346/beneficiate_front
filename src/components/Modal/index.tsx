import React, { ReactNode } from "react";
import "./style.css";
import { AlertProvider } from "../Alert/AlertContext";
interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className="modal-container">
    <AlertProvider>
      {children}
    </AlertProvider>
  </div>;
};

export default Modal;
