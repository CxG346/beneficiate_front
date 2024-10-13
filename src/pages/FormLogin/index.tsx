import React from "react";
import LoginLayout from "../../layout/Login/LoginLayout";
import LoginFormImg from "../../assets/loginform.png";
import avatarImg from "../../assets/avatar.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";

const FormLogin: React.FC = () => {
  return (
    <LoginLayout imgSrc={LoginFormImg} showFooter>
      <div className="content-container">
        <h2>Que bueno tenerte de nuevo!!!</h2>
        <div className="form-container">
          <GeneralInput placeholder="CI/Email" />
          <GeneralInput placeholder="Contraseña" />
          <button className="actions-button start-button">
            <img className="avatar-img" src={avatarImg} alt="" />
            Iniciar sesión
          </button>
          <a href="">
            Olvide la contraseña <strong>Quiero recuperarla</strong>
          </a>
        </div>
        <p className="footer-copy">By Benefíciate</p>
      
      </div>

    </LoginLayout>
  );
};

export default FormLogin;
