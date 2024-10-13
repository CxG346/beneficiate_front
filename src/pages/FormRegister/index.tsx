import React, { useState } from "react";
import "./style.css";
import GeneralInput from "../../components/GeneralInput";
import CheckboxCustom from "../../components/CheckboxCustom";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/paths";

const FormRegister: React.FC = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="general-container">
      <h2>
        Unite ahora a <strong>Quiero +</strong>
      </h2>
      <p>Desbloquea recompensas, !empieza a ganar ahora!</p>
      <div className="form-container">
        <GeneralInput placeholder="Nombre" required />
        <GeneralInput placeholder="Apellido" required />
        <GeneralInput placeholder="CI" required />
        <GeneralInput placeholder="Teléfono" required />
        <GeneralInput placeholder="Email" required />
        <GeneralInput placeholder="Contraseña" required />
        <GeneralInput placeholder="Código de referidos" required />
        <CheckboxCustom
          label="Acepto los términos y condiciones"
          checked={isChecked}
          onChange={setIsChecked}
        />
        <button className="create-button">
            Crear cuenta
        </button>
      </div>
      <a className="footer-copy" onClick={() => navigate(PATH.FORM_LOGIN)}>¿Ya tienes cuenta? <strong>Iniciar sesión</strong> </a>
    </div>
  );
};

export default FormRegister;
