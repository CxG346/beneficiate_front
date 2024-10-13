import React from "react";
import "./style.css";

export interface GeneralTextAreaProps {
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

const GeneralTextArea: React.FC<GeneralTextAreaProps> = ({
  placeholder,
  required,
  style,
}) => {
  return (
    <textarea
      className="generalTextArea"
      placeholder={placeholder + (required ? "*" : "")}
      style={{ ...style }}
    />
  );
};

export default GeneralTextArea;
