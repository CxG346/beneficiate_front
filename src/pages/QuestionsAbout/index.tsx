import React from "react";
import imageSupport from "../../assets/support_image.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";

const QuestionsAbout: React.FC = () => {
  return (
      <div className="main-container-support">
      <img src={imageSupport} alt="" />
      <p>Contesta 5 preguntas que nos ayudan a mejorar el servicio</p>
      <GeneralInput placeholder="¿Qué te parece nuestro servicio de puntos?" />
      <GeneralInput placeholder="¿Qué crees que podríamos mejorar?" />
      <GeneralInput placeholder="¿Qué es lo que más te gusta?" />
      <GeneralInput placeholder="¿Qué es lo que menos te gusta?" />
      <GeneralInput placeholder="¿La recomendarías a un amigo?" />
      <button className="create-button">Enviar Respuesta</button>
    </div>
  );
};

export default QuestionsAbout;
