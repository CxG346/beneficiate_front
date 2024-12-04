import React from "react";
import "./style.css";

export interface GlassContainerProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  classes?: string;
  onClick?: () => void;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  styles,
  classes,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={"col-md-12 glass-style general-container-glass " + classes}
      style={{ cursor: "pointer", ...styles }}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
