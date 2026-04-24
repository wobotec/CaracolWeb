// src/components/student/SuspendedHeader.jsx
import React from "react";
import TotalBadge from "./TotalBadge";
import Flex from "react-calendar/dist/Flex.js";
import { width } from "@fortawesome/free-brands-svg-icons/fa11ty";

const SuspendedHeader = ({ total }) => {
  return (
    <>
      {/* Título */}
      <div className="text-center mb-4">
        <h4 className="fw-semibold">
          Impressão da lista de Alunos suspensos
        </h4>
        <div
          className="mx-auto"
          style={{
            width: "60px",
            height: "3px",
            background: "#0d6efd",
            marginTop: "6px"
          }}
        ></div>
      </div>

      {/* Top */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-4 row" style={{width: "50%", margin: "0px auto"}}>
        <div className="col-md-6">
            
        <TotalBadge total={total} />
</div>
<div className="col-md-6">
        <button
          className="btn d-flex align-items-center gap-2"
          style={{
            background: "#4f46e5",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "6px"
          }}
          onClick={() => window.print()}
        >
          🖨 IMPRIMIR
        </button>
        </div>
      </div>
    </>
  );
};

export default SuspendedHeader;