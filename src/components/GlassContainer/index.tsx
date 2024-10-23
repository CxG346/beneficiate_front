import React from "react";
import "./style.css";

export interface GlassContainerProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  classes?: string;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  styles,
  classes,
}) => {
  return (
    <div
      className={"col-md-12 glass-style general-container-glass " + classes}
      style={{ cursor: "pointer", ...styles }}
    >
      {children}
    </div>
  );
};

export default GlassContainer;
