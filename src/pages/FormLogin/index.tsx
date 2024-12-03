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
import { useAlert } from "../../components/Alert/useAlert";

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { secondaryColor } = useSelector((state: AppState) => state.generalConfig);

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    if (!user || !password) {
      showAlert("Por favor, rellene todos los campos", "error");
      return;
    }

    const body: UserLoginServiceRequest = {
      userName: user,
      password: password
    };

    try {
      const resp: UserLoginResponse = await login(body);
      showAlert("Los datos son correctos", "success");
      localStorage.setItem("general_data_user", JSON.stringify(resp));
      setTimeout(() => {
        navigate(PATH.HOME);  
      }, 1000);
    } catch (error) {
      showAlert("El CI/Email o la contraseña son incorrectos", "error");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <LoginLayout imgSrc={LoginFormImg}>
      <h2 className="title-good">¡Qué bueno tenerte de nuevo!</h2>
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
        <a href="">
          Olvidé la contraseña <strong>Quiero recuperarla</strong>
        </a>
      </div>
      <p className="footer-copy">By Benefíciate</p>
    </LoginLayout>
  );
};

export default FormLogin;