import React from "react";
import "./style.css";
import CodeLayout from "../../layout/Code/CodeLayout";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import Header from "../../components/Header";

const CodeValidation: React.FC = () => {
  const { primaryColor, secondaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

  return (
    <>
      <Header/>
      <CodeLayout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            className="text-abel"
            style={{
              color: `${secondaryColor}`,
              fontWeight: "normal",
              fontSize: "35px",
              textAlign: "center",
              margin: "0",
              padding: "0px 1rem 1rem",
            }}
          >
            Ingresa el código de verificación
          </h1>
          <p
            style={{
              textAlign: "center",
              padding: "0px 5% 1rem",
            }}
          >
            Introduzca el código que te hemos enviado a su correo electrónico
            seba...@hotmail.com.com
          </p>
          <div
            style={{
              display: "flex",
              gap: "13px",
              width: "90%",
              marginBottom: "2rem",
            }}
          >
            <input
              className="input-code"
              style={{
                color: `${secondaryColor}`,
                background: "transparent",
                // border: `1px solid ${secondaryColor}`,
              }}
              type="text"
            />
            <input
              className="input-code"
              style={{
                color: `${secondaryColor}`,
                background: "transparent",
                // border: `1px solid ${secondaryColor}`,
              }}
              type="text"
            />
            <input
              className="input-code"
              style={{
                color: `${secondaryColor}`,
                background: "transparent",
                // border: `1px solid ${secondaryColor}`,
              }}
              type="text"
            />
            <input
              className="input-code"
              style={{
                color: `${secondaryColor}`,
                background: "transparent",
                // border: `1px solid ${secondaryColor}`,
              }}
              type="text"
            />
          </div>
          <button className="create-button">Comprobar</button>
          <a href="" style={{ color: "#2E3192", marginTop: "0", fontSize: '14px' }}>
            Reenviar código
          </a>
          <p style={{ color: `${primaryColor}`, padding: "0.6rem 0 0" }}>
            By Benefíciate
          </p>
        </div>
      </CodeLayout>
    </>
  );
};

export default CodeValidation;
