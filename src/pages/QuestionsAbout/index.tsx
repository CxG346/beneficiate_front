import React, { useState } from "react";
import imageSupport from "../../assets/support_image.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";
import { Question } from "../../types/api/questionst";
import { useAlert } from "../../components/Alert/useAlert";
import { sendRequestRewardQuestions } from "../../services/sendService";

const QuestionsAbout: React.FC = () => {
  const { showAlert } = useAlert();
  const [formData, setFormData] = useState<Question[]>([
    { question: "¿Qué te parece nuestro servicio de puntos?", answer: "" },
    { question: "¿Qué crees que podríamos mejorar?", answer: "" },
    { question: "¿Qué es lo que más te gusta?", answer: "" },
    { question: "¿Qué es lo que menos te gusta?", answer: "" },
    { question: "¿La recomendarías a un amigo?", answer: "" }
  ]);

  const handleChange = (index: number, value: string) => {
    const newFormData = [...formData];
    newFormData[index].answer = value;
    setFormData(newFormData);
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    formData.forEach((item, index) => {
      if (!item.answer) {
        newErrors[`question${index}`] = "Esta pregunta es requerida";  
      }
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      showAlert("Por favor, rellene todos los campos", "error");
      return;
    }
  
    try {
      await sendRequestRewardQuestions(formData);
      showAlert("Respuestas enviadas correctamente", "success");
    } catch (error: unknown) {
      if (error instanceof Error && typeof error === "object" && error.message) {
        const responseError = error as unknown as { response: { data: { error: { message: string } } } };
        showAlert(responseError.response.data.error.message, "error");
      } else {
        showAlert("Error desconocido", "error");
      }
    }
  };

  return (
    <div className="main-container-support">
      <img src={imageSupport} alt="" />
      <p>Contesta 5 preguntas que nos ayudan a mejorar el servicio</p>
      {formData.map((item, index) => (
        <div key={index} className="input-container">
          <GeneralInput
            placeholder={item.question}
            onChange={(e) => handleChange(index, e.target.value)}
          />
      </div>
      ))}
      <button className="create-button" onClick={handleSubmit}>
        Enviar Respuesta
      </button>
    </div>
  );
};

export default QuestionsAbout;