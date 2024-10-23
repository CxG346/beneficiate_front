import React, { useEffect, useState } from "react";
import HomeLayout from "../../layout/Home/HomeLayout";
import GlassContainer from "../../components/GlassContainer";
import "./style.css";

const RedeemCoupon: React.FC = () => {
  const [valueInputNumber, setValueInputNumber] = useState<number>(0);
  const [points, setPoints] = useState<number>(150);

  const handleInputNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (isNaN(Number(value))) {
      return;
    }

    if (value.length > 6) {
      return;
    }

    if (Number(value) > points) {
      return;
    }

    setValueInputNumber(Number(value));
  };

  useEffect(() => {
    setPoints(150);
  }, [])

  return (
    <HomeLayout>
      <GlassContainer>
        <div className="col" style={{ padding: "1rem 20%" }}>
          <p style={{ color: "white", fontSize: "14px" }}>
            Introduzca la cantidad de puntos que desea canjear
          </p>
          <input
            type="text"
            className="input-number"
            style={{ padding: "2rem 0" }}
            value={valueInputNumber}
            onChange={handleInputNumber}
          />
          <p style={{ margin: "0", color: "white", fontSize: "12px" }}>
            Puntos disponibles: {points - valueInputNumber}
          </p>
          <p style={{ margin: "0", color: "white", fontSize: "12px" }}>
            {valueInputNumber} puntos equivalente a $
            {valueInputNumber.toFixed(2)}
          </p>
          <button
            style={{
              width: "100%",
              background:
                valueInputNumber > 0
                  ? "rgba(46, 49, 146, 1)"
                  : "rgba(217, 217, 217, 0.7)",
              color: "white",
              padding: "1rem 0",
              margin: "1.5rem 0",
            }}
          >
            Canjear
          </button>
        </div>
      </GlassContainer>
      <div style={{ display: "flex", width: "80%", gap: '.5rem' }}>
        <div className="col-md-6" style={{ width: "100%" }}>
          <GlassContainer styles={{ width: "100%", padding: "0.5rem 0" }}>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
                margin: '0',
                padding: '.5rem 0'
              }}
            >
              Como sumar puntos
            </p>
          </GlassContainer>
        </div>
        <div className="col-md-6" style={{ width: "100%" }}>
          <GlassContainer styles={{ width: "100%", padding: "0.5rem 0" }}>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
                margin: '0',
                padding: '.5rem 0'
              }}
            >
              Como canjear puntos
            </p>
          </GlassContainer>
        </div>
      </div>
    </HomeLayout>
  );
};

export default RedeemCoupon;
