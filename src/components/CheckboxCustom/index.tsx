import React from "react";
import "./style.css";

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }

const CheckboxCustom: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default CheckboxCustom;
