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
    emailMarketing: true
  });

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) newErrors.firstName = 'Nombre es requerido';
    if (!formData.lastName) newErrors.lastName = 'Apellido es requerido';
    if (!formData.ci) newErrors.ci = 'CI es requerido';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Teléfono es requerido';
    if (!formData.email) newErrors.email = 'Email es requerido';
    if (!formData.password) newErrors.password = 'Contraseña es requerida';
    if (!isChecked) newErrors.terms = 'Debe aceptar los términos y condiciones';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCreateAccount = async () => {
    if (validate()) {
      try {
        await register(formData);
        navigate(PATH.LOGIN);
      } catch (error) {
        console.error('Error al crear la cuenta:', error);
      }
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
        <GeneralInput name="email" type={'email'} placeholder="Email" required onChange={handleChange} />
        <GeneralInput name="password" type={'password'} placeholder="Contraseña"  required onChange={handleChange} />
        <GeneralInput name="referCode" placeholder="Código de referidos" required onChange={handleChange} />
        <CheckboxCustom
          label="Acepto los términos y condiciones"
          checked={isChecked}
          onChange={setIsChecked}
        />
        { 
          errors.terms && <span className="error-message">
            {errors.terms}
          </span>
        }
        <button className="create-button" onClick={handleCreateAccount}>
          Crear cuenta
        </button>
      </div>
      <a className="footer-copy" onClick={() => navigate(PATH.FORM_LOGIN)}>¿Ya tienes cuenta? <strong>Iniciar sesión</strong> </a>
    </div>
  );
};

export default FormRegister;