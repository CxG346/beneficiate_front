import React, { useState } from "react";
import LoginLayout from "../../layout/Login/LoginLayout";
import LoginFormImg from "../../assets/loginform.png";
import avatarImg from "../../assets/avatar.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { UserLoginServiceRequest } from "../../types/api/auth";
import { UserLoginService } from "../../services/authServices";

const FormLogin: React.FC = () => {
  const { secondaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function _handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement>,
    target: React.Dispatch<React.SetStateAction<string>>
  ) {
    target(e.target.value);
  }

  async function _handleSubmit() {
    setError("");
    if (user === "" || password === "") {
      setError("Por favor, rellene todos los campos");
      return;
    }

    const body: UserLoginServiceRequest = {
      userName: user,
      password: password
    }

    const response = await UserLoginService(body)
  }

  return (
    <LoginLayout imgSrc={LoginFormImg}>
      <h2>Que bueno tenerte de nuevo!!!</h2>
      <div className="form-container">
        <GeneralInput
          placeholder="CI/Email"
          onChange={(value) => _handleChangeInput(value, setUser)}
        />
        <GeneralInput
          placeholder="Contraseña"
          onChange={(value) => _handleChangeInput(value, setPassword)}
        />
        <button
          className="actions-button"
          style={{ background: `${secondaryColor}` }}
          onClick={_handleSubmit}
        >
          <img className="avatar-img" src={avatarImg} alt="" />
          Iniciar sesión
        </button>
        {error != "" && (
          <span
            style={{ color: "red", fontSize: ".75rem", marginTop: ".5rem" }}
          >
            {error}
          </span>
        )}
        <a href="">
          Olvide la contraseña <strong>Quiero recuperarla</strong>
        </a>
      </div>
      <p className="footer-copy">By Benefíciate</p>
    </LoginLayout>
  );
};

export default FormLogin;
