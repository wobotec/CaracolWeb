import React from "react";
import data from "./resumoAlunosMock";
import FilterAno from "./FilterAno";


const ResumoTable = () => {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead style={{  color: "black" }}>
          <tr>
            <th>CLASSE</th>
            <th>TURMA</th>
            <th>Nº DE ALUNOS</th>
            <th>ALUNOS ACTIVOS</th>
            <th>ALUNOS DESACTIVADOS</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.classe}</td>
              <td>{item.turma}</td>
              <td>{item.total}</td>
              <td>{item.activos}</td>
              <td>{item.desactivos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumoTable;