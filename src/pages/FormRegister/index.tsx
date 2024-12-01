import React, { useState } from "react";
import "./style.css";
import GeneralInput from "../../components/GeneralInput";
import CheckboxCustom from "../../components/CheckboxCustom";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/paths";
import { UserRegister } from "../../types/api/auth";
import { register } from "../../services/authServices";

const FormRegister: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserRegister>({
    ci: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    referCode: '',
    password: '',
    emailMarketing: false
  });

  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState<string>('');

  const validate = (): boolean => {
    return Object.keys(formData).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCreateAccount = async () => {
    setError('');
    if (validate()) {
      try {
        await register(formData);
        navigate(PATH.LOGIN);
      } catch (error) {
        console.error('Error al crear la cuenta:', error);
      }
    }else{
      setError('Por favor, rellene todos los campos');
    }
  };

  return (
    <div className="general-container">
      <h2>
        Unite ahora a <strong>Quiero +</strong>
      </h2>
      <p>Desbloquea recompensas, !empieza a ganar ahora!</p>
      <div className="form-container">
        <GeneralInput name="firstName" placeholder="Nombre" required onChange={handleChange} />
        <GeneralInput name="lastName" placeholder="Apellido" required onChange={handleChange} />
        <GeneralInput name="ci" placeholder="CI" required onChange={handleChange} />
        <GeneralInput name="phoneNumber" placeholder="Teléfono" required onChange={handleChange} />
        <GeneralInput name="email" placeholder="Email" required onChange={handleChange} />
        <GeneralInput name="password" placeholder="Contraseña" required onChange={handleChange} />
        <GeneralInput name="referCode" placeholder="Código de referidos" required onChange={handleChange} />
        <CheckboxCustom
          label="Acepto los términos y condiciones"
          checked={isChecked}
          onChange={setIsChecked}
        />
        {error && (
          <span className="error-message">
            {error}
          </span>
        )}
        <button className="create-button" onClick={handleCreateAccount}>
          Crear cuenta
        </button>
      </div>
      <a className="footer-copy" onClick={() => navigate(PATH.FORM_LOGIN)}>¿Ya tienes cuenta? <strong>Iniciar sesión</strong> </a>
    </div>
  );
};

export default FormRegister;