import "./style.css";
import icon from "../../assets/icon.png";
import React from "react";

type FloatButtonProps = {
  onClick: () => void;
};

const FloatButton: React.FC<FloatButtonProps> = ({ onClick }) => {
  return (
    <div className="float-button" onClick={onClick}>
      <img src={icon} alt="" />
      <div className="alerts">1</div>
    </div>
  );
};

export default FloatButton;
