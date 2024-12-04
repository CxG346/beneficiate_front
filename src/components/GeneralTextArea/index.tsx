import React from "react";
import "./style.css";

export interface GeneralTextAreaProps {
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const GeneralTextArea: React.FC<GeneralTextAreaProps> = ({
  placeholder,
  required,
  style,
  name,
  onChange
}) => {
  return (
    <textarea
      className="generalTextArea"
      name={name}
      placeholder={placeholder + (required ? "*" : "")}
      style={{ ...style }}
      onChange={onChange}
    />
  );
};

export default GeneralTextArea;
