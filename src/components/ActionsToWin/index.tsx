import React from "react";
import "./style.css";

export interface ActionsToWinProps {
  image: React.ReactNode;
  points: number;
  action: string;
}

const ActionsToWin: React.FC<ActionsToWinProps> = ({
  image,
  points,
  action,
}) => {
  return (
    <div
      className="container-win"
      style={{ display: "flex", alignItems: "center", padding: "0.5rem 0" }}
    >
      {image}
      <div
        className="col"
        style={{
          marginLeft: ".5rem",
          display: "flex",
          alignItems: "self-start",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "12px", fontWeight: "bolder", margin: "0" }}>
          {action}
        </p>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "bolder",
            margin: "0",
            color: "white",
          }}
        >
          {points} puntos
        </p>
      </div>
    </div>
  );
};

export default ActionsToWin;
