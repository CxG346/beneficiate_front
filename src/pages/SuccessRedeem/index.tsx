import React from "react";
import PiggyBank from "../../assets/piggy_bank.png";

const SuccessRedeem: React.FC = () => {
  return (
    <div
      className="col"
      style={{
        margin: "3rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img src={PiggyBank} alt="" />
      </div>
      <div style={{ padding: "0 5rem" }}>
        <p style={{ color: "rgba(110, 78, 255, 1)", fontSize: "18px" }}>
          Acaba de Canjear 150 puntos por 150 pesos
        </p>
      </div>
      <div className="col" style={{ marginTop: "3rem" }}>
        <p style={{ color: "rgba(110, 78, 255, 1)" }}>
          ¡Las recompensas son ahora reales
        </p>
        <p style={{ color: "rgba(110, 78, 255, 1)" }}>
          Esto es sólo el comienzo.
        </p>
        <p style={{ color: "rgba(110, 78, 255, 1)" }}>
          Sigue coleccionando y cobrando
        </p>
      </div>
      <button
        style={{
          width: "80%",
          background: "rgba(46, 49, 146, 1)",
          color: "white",
          padding: "1rem 0",
          margin: "1.5rem 0",
        }}
      >
        Vamos por más puntos
      </button>
    </div>
  );
};

export default SuccessRedeem;
