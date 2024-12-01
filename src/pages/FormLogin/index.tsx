import React, { useState } from "react";
import LoginLayout from "../../layout/Login/LoginLayout";
import LoginFormImg from "../../assets/loginform.png";
import avatarImg from "../../assets/avatar.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { UserLoginResponse, UserLoginServiceRequest } from "../../types/api/auth";
import { login } from "../../services/authServices";
import { PATH } from "../../routes/paths";
import { useNavigate } from "react-router-dom";

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const { secondaryColor } = useSelector((state: AppState) => state.generalConfig);

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    setError("");
    if (!user || !password) {
      setError("Por favor, rellene todos los campos");
      return;
    }

    const body: UserLoginServiceRequest = {
      userName: user,
      password: password
    };

    try {
      const resp: UserLoginResponse = await login(body);
      localStorage.setItem("general_data_user", JSON.stringify(resp));
      navigate(PATH.HOME);
    } catch (error) {
      setError("Error al iniciar sesión. Por favor, intente nuevamente.");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <LoginLayout imgSrc={LoginFormImg}>
      <h2>¡Qué bueno tenerte de nuevo!</h2>
      <div className="form-container">
        <GeneralInput
          placeholder="CI/Email"
          onChange={(e) => handleChangeInput(e, setUser)}
        />
        <GeneralInput
          placeholder="Contraseña"
          onChange={(e) => handleChangeInput(e, setPassword)}
        />
        <button
          className="actions-button"
          style={{ background: secondaryColor }}
          onClick={handleSubmit}
        >
          <img className="avatar-img" src={avatarImg} alt="Avatar" />
          Iniciar sesión
        </button>
        {error && (
          <span className="error-message">
            {error}
          </span>
        )}
        <a href="">
          Olvidé la contraseña <strong>Quiero recuperarla</strong>
        </a>
      </div>
      <p className="footer-copy">By Benefíciate</p>
    </LoginLayout>
  );
};

export default FormLogin;