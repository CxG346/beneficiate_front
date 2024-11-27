import React from "react";
import "./style.css";
import CodeLayout from "../../layout/Code/CodeLayout";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const CodeValidation: React.FC = () => {
  const { primaryColor, secondaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

  return (
    <CodeLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: `${secondaryColor}`,
            fontWeight: "normal",
            fontSize: "2rem",
            textAlign: "center",
            margin: "0",
            padding: "0 15%",
          }}
        >
          Ingresa el código de verificación
        </h1>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            padding: "1rem 15%",
          }}
        >
          Introduzca el código que te hemos enviado a su correo electrónico
          seba...@hotmail.com.com
        </p>
        <div
          style={{
            display: "flex",
            gap: "13px",
            width: "85%",
            marginBottom: "2rem",
          }}
        >
          <input
            className="input-code"
            style={{
              color: `${secondaryColor}`,
              background: "transparent",
              border: `1px solid ${secondaryColor}`,
            }}
            type="text"
          />
          <input
            className="input-code"
            style={{
              color: `${secondaryColor}`,
              background: "transparent",
              border: `1px solid ${secondaryColor}`,
            }}
            type="text"
          />
          <input
            className="input-code"
            style={{
              color: `${secondaryColor}`,
              background: "transparent",
              border: `1px solid ${secondaryColor}`,
            }}
            type="text"
          />
          <input
            className="input-code"
            style={{
              color: `${secondaryColor}`,
              background: "transparent",
              border: `1px solid ${secondaryColor}`,
            }}
            type="text"
          />
        </div>
        <button className="create-button">Crear cuenta</button>
        <a href="" style={{ color: "#2E3192", marginTop: "0" }}>
          Reenviar código
        </a>
        <p style={{ color: `${primaryColor}`, padding: "1rem" }}>
          By Benefíciate
        </p>
      </div>
    </CodeLayout>
  );
};

export default CodeValidation;
