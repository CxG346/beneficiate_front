import React, { useState } from "react";
import imageSupport from "../../assets/support_image.png";
import GeneralInput from "../../components/GeneralInput";
import GeneralTextArea from "../../components/GeneralTextArea";
import "./style.css";
import { Request } from "../../types/api/send";
import { useAlert } from "../../components/Alert/useAlert";
import { sendRequest } from "../../services/sendService";

const Support: React.FC = () => {
  const { showAlert } = useAlert();
  const [formData, setFormData] = useState<Request>({
    name: "",
    email: "",
    question: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "El nombre es requerido";
    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.question) newErrors.question = "La consulta es requerida";

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      showAlert("Por favor, rellene todos los campos correctamente", "error");
      return;
    }

    try {
      await sendRequest(formData);
      showAlert("Consulta enviada correctamente", "success");
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        showAlert(error.message, "error");
      } else if (error && typeof error === "object" && "response" in error) {
        const responseError = error as { response: { data: { error: { message: string } } } };
        showAlert(responseError.response.data.error.message, "error");
      } else {
        showAlert("Error desconocido", "error");
      }
    }
  };

  return (
    <div className="main-container-support">
      <img src={imageSupport} alt="" />
      <p>
        Déjanos tu duda sobre Benefíciate. La responderemos lo antes posible.
      </p>
      <GeneralInput
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
      />
      <GeneralInput
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <GeneralTextArea
        name="question"
        placeholder="Consulta"
        onChange={handleChange}
      />
      <button className="create-button" onClick={handleSubmit}>
        Enviar consulta
      </button>
    </div>
  );
};

export default Support;