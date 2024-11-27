import React from "react";
import "./style.css";

interface GeneralInputProps {
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  placeholder,
  required,
  style,
  onChange
}) => {
  return (
    <input
      className="generalInput"
      type="text"
      placeholder={placeholder + (required ? "*" : "")}
      onChange={onChange}
      style={{ marginBottom: "13px", ...style }}
    />
  );
};

export default GeneralInput;
