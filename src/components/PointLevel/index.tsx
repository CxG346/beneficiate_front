import React from "react";
import "./style.css";

export interface PointLevelProps {
  levelName: string;
  minPoints: number;
  maxPoints: number;
  isLast: boolean;
  isActive: boolean;
  onClick?: () => void;
}

const PointLevel: React.FC<PointLevelProps> = ({
  levelName,
  minPoints,
  maxPoints,
  isLast,
  isActive,
  onClick,
}) => {
  return (
    <div className="point" style={{ width: isLast ? 0 : "50%" }}>
      <div className="img-level-container">
        <div
          className="img-avatar"
          onClick={onClick}
          style={{
            width: isActive ? "89px" : "55px",
            height: isActive ? "89px" : "55px",
            cursor: "pointer",
          }}
        ></div>
        <p>{levelName}</p>
      </div>
      <div className="points-level-container" style={{width: '89px'}}>
        <p>
          de {minPoints} <br /> a {maxPoints} puntos
        </p>
      </div>
    </div>
  );
};

export default PointLevel;
