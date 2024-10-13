import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginImg.png";
import LoginLayout from "../../layout/Login/LoginLayout";
import "./style.css";
import { PATH } from "../../routes/paths";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(PATH.START);
  };

  return (
    <LoginLayout imgSrc={loginImg} showFooter>
      <div>
        <h2>
          Suma Puntos,
          <br />
          Paga menos.
        </h2>
        <p>
          Regístrate para sumar <br />
          puntos disfruta de un mundo <br />
          de recompensas personalizadas <br />
          bienvenido a <strong>Quiero+</strong>
        </p>
        {/* <div className="options-swipe">
          <div className="option active"></div>
          <div className="option"></div>
          <div className="option"></div>
        </div> */}
        <div className="button-container">
          <button className="action-button" onClick={handleNavigate}>
            Comenzar
          </button>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
