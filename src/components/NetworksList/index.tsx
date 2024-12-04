import React from "react";

const NetworkList: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="row"
        style={{ display: "flex" }}
      >
        <div style={{ width: "80%" }}>
          <p style={{ color: "white", fontSize: "12px", textAlign: "left" }}>
            Reenviarme el codigo a:
          </p>
        </div>
      </div>
      <div
        className="row"
        style={{
          padding: "0.5rem .75rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-whatsapp" style={{ fontSize: "x-large" }}></i>
          <p style={{ color: "white" }}>whatsapp</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-envelope" style={{ fontSize: "x-large" }}></i>
          <p style={{ color: "white" }}>Email</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkList;
