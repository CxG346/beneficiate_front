import React from "react";
import GlassContainer from "../GlassContainer";

const DoubleGlass: React.FC = () => {
  return (
    <div style={{ display: "flex", width: "80%", gap: ".5rem" }}>
      <div className="col-md-6" style={{ width: "100%" }}>
        <GlassContainer styles={{ width: "100%", padding: "0.5rem 0" }}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              textAlign: "center",
              width: "100%",
              margin: "0",
              padding: ".5rem 0",
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
              margin: "0",
              padding: ".5rem 0",
            }}
          >
            Como canjear puntos
          </p>
        </GlassContainer>
      </div>
    </div>
  );
};

export default DoubleGlass;