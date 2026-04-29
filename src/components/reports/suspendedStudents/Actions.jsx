import React from "react";

const Actions = ({ onPrint }) => {
  return (
    <button
      onClick={onPrint}
      className="btn text-white px-4 py-2 d-flex align-items-center gap-2"
      style={{
        background: "linear-gradient(90deg, #6f42c1, #4f46e5)",
        border: "none"
      }}
    >
      🖨 IMPRIMIR
    </button>
  );
};

export default Actions;