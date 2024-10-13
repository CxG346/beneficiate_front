import React from "react";
import LoginLayout from "../../layout/Login/LoginLayout";
import frame72Img from "../../assets/frame72.png";
import avatarImg from "../../assets/avatar.png";
import registerImg from "../../assets/register.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/paths";

const Start: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <LoginLayout imgSrc={frame72Img}>
      <div className="content-container">
        <h2 className="title-start">Comencemos</h2>
        <p className="p-start">Estas a un paso de grandes descuentos</p>
        <div className="buttons-container">
          <button
            className="actions-button start-button"
            onClick={() => handleNavigate(PATH.FORM_LOGIN)}
          >
            <img className="avatar-img" src={avatarImg} alt="" />
            Iniciar sesión
          </button>
          <button className="actions-button register-button"
            onClick={() => handleNavigate(PATH.FORM_REGISTER)}
            >
            <img className="avatar-img" src={registerImg} alt="" />
            Registrarme
          </button>
          <a href="/faqs" style={{ textAlign: "center" }}>
            Soporte
          </a>
        </div>
        <p className="footer-copy">By Benefíciate</p>
      </div>
    </LoginLayout>
  );
};

export default Start;
