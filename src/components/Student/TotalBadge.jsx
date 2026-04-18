// src/components/student/TotalBadge.jsx
import React from "react";

const TotalBadge = ({ total }) => {
  return (
    <div
      className="d-flex align-items-center gap-2"
      style={{
        background: "#fff",
        padding: "10px 20px",
        borderRadius: "25px",
        border: "1px solid #eee"
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: "35px",
          height: "35px",
          background: "#0d6efd",
          borderRadius: "50%",
          color: "#fff"
        }}
      >
        👤
      </div>

      <div style={{ fontSize: "13px" }}>
        <div className="text-muted">TOTAL DE ALUNOS</div>
        <div className="fw-bold text-primary">{total}</div>
      </div>
    </div>
  );
};

export default TotalBadge;