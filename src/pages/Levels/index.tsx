import React from "react";
import LevelLayout from "../../layout/Level/LevelLayout";
import DoubleGlass from "../../components/DoubleGlass";
import GlassContainer from "../../components/GlassContainer";
import CopyInput from "../../components/CopyInput";
import NetworkList from "../../components/NetworksList";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const Level: React.FC = () => {
  const { primaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

  return (
    <LevelLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DoubleGlass />
        <GlassContainer>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    color: "white",
                    margin: "0",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Da 100, Recibe 100
                </p>
                <p
                  style={{
                    color: "white",
                    margin: "0",
                    fontSize: "8px",
                    textAlign: "left",
                  }}
                >
                  0 Referidos completados
                </p>
              </div>
              <i className="bi bi-chevron-right"></i>
            </div>
            <p
              style={{
                color: "white",
                fontSize: "14px",
                textAlign: "left",
                padding: "2rem 0",
              }}
            >
              Dale a tus amigos 100 puntos y reclama los tuyos cuando hagan una
              compra. Válido en compras únicas y suscripciones.
            </p>
            <CopyInput />
            <NetworkList />
          </div>
        </GlassContainer>
        <p style={{ color: `${primaryColor}`, padding: "3rem 0 1rem 0" }}>
          By Benefíciate
        </p>
      </div>
    </LevelLayout>
  );
};

export default Level;
