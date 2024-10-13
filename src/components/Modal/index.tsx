import React, { ReactNode } from "react";
import "./style.css";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className="modal-container">{children}</div>;
};

export default Modal;
