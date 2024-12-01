import "./App.css";
import FloatButton from "./components/FloatButton";
import Notifies from "./components/Notifies";
import "./App.css";
import Modal from "./components/Modal";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useEffect, useState } from "react";
import { GlobalLoginTokenServiceRequest } from "./types/api/auth";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const getTokenLogin = async () => {
    const body: GlobalLoginTokenServiceRequest = {
      client_id: "Beneficiate_App",
      grant_type: "password",
      username: "QuieroNatural",
      password: "TGbHh7M0nZbclKQ?",
    };

    const response = await axios.post(
      "https://beneficiate-dev-api.azurewebsites.net/connect/token",
      body,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    localStorage.setItem("general_access_token", response.data.access_token);

  };

  useEffect(() => {
    getTokenLogin();
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
