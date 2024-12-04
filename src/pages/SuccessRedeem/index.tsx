import React from "react";
import PiggyBank from "../../assets/piggy_bank.png";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const SuccessRedeem: React.FC = () => {
  const navigate = useNavigate();

  const handleEarnPoints = () => {
    navigate('/redeem-coupon');
  };
  const { primaryColor, secondaryColor } = useSelector(
    (state: AppState) => state.generalConfig
  );

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
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img src={PiggyBank} alt="" />
      </div>
      <div style={{ padding: "0 5rem" }}>
        <p style={{ color: `${primaryColor}`, fontSize: "18px" }}>
          Acaba de Canjear 150 puntos por 150 pesos
        </p>
      </div>
      <div className="col" style={{ marginTop: "3rem" }}>
        <p style={{ color: `${primaryColor}` }}>
          ¡Las recompensas son ahora reales
        </p>
        <p style={{ color: "${" }}>
          Esto es sólo el comienzo.
        </p>
        <p style={{ color: "${" }}>
          Sigue coleccionando y cobrando
        </p>
      </div>
      <button
        onClick={handleEarnPoints}
        style={{
          width: "80%",
          background: `${secondaryColor}`,
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
