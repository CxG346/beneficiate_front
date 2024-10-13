import React from "react";
import imageSupport from "../../assets/support_image.png";
import GeneralInput from "../../components/GeneralInput";
import "./style.css";
import GeneralTextArea from "../../components/GeneralTextArea";

const Support: React.FC = () => {
  return (
    <div className="main-container-support">
      <img src={imageSupport} alt="" />
      <p>
        Déjanos tu duda sobre Benefíciate.La responderemos lo antes posible.
      </p>
      <GeneralInput placeholder="Nombre" />
      <GeneralInput placeholder="Email" />
      <GeneralTextArea placeholder="Consulta" />
      <button className="create-button">Enviar consulta</button>
    </div>
  );
};

export default Support;
