import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const PrintButton = () => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "linear-gradient(90deg, #4e73df, #6f42c1)",
        color: "#fff",
        padding: "12px 25px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FontAwesomeIcon icon={faPrint} />
      IMPRIMIR
    </button>
  );
};

export default PrintButton;