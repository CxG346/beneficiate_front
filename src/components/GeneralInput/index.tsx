import React from "react";
import "./style.css";

interface GeneralInputProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GeneralInput: React.FC<GeneralInputProps> = ({
  name,
  placeholder,
  required,
  style,
  type = "text",
  onChange
}) => {
  return (
    <input
      name={name}
      className="generalInput"
      type={type}
      placeholder={placeholder + (required ? "*" : "")}
      onChange={onChange}
      style={{ marginBottom: "15px", ...style }}
    />
  );
};

export default GeneralInput;
