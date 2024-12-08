import "./App.css";
import FloatButton from "./components/FloatButton";
import Notifies from "./components/Notifies";
import "./App.css";
import Modal from "./components/Modal";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useState } from "react";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  const [showModal, setShowModal] = useState<boolean>(true);
  
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <ModalProvider>
        <div className="position-button-plugin">
          <span style={{ display: showModal ? "block" : "none" }}>
            <Modal>
              <RouterProvider router={router} />
            </Modal>
          </span>
          <div className="button-notification">
            <Notifies />
            <FloatButton onClick={handleShowModal} />
          </div>
        </div>
      </ModalProvider>
    </>
  );
}

export default App;
