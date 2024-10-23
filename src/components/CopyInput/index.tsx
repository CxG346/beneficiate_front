import React from "react";
import "./style.css";

const CopyInput: React.FC = () => {
  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="input-code">
        <input type="text" />
        <button>
          <i className="bi bi-copy" style={{ fontSize: "large" }}></i>
        </button>
      </div>
    </div>
  );
};

export default CopyInput;
