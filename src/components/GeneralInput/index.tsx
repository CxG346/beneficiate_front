import React from "react";
import "./style.css";

interface GeneralInputProps {
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  placeholder,
  required,
  style,
}) => {
  return (
    <input
      className="generalInput"
      type="text"
      placeholder={placeholder + (required ? "*" : "")}
      style={{ marginBottom: "13px", ...style }}
    />
  );
};

export default GeneralInput;
