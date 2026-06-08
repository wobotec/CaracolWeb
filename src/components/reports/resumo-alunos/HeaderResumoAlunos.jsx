import React from "react";
import FilterAno from "./FilterAno";
import PrintButton from "./PrintButton";
import ResumoAlunosPage from "../../pages/reports/ResumoAlunosPage";

const HeaderResumoAlunos = () => {
  return (
    <div style={{ marginBottom: "25px" }}>

      {/* TÍTULO */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h4 style={{ margin: 0 }}>
          Resumo do{" "}
          <span style={{ borderBottom: "3px solid #0d6efd" }}>
            sistema
          </span>{" "}
          para alunos
        </h4>
      </div>

      {/* LINHA */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FilterAno />
        <PrintButton />
      </div>
    </div>
  );
};

export default HeaderResumoAlunos;