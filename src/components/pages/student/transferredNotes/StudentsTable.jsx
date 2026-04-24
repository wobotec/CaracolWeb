import React, { useState } from "react";

const StudentsTable = ({ onSelectStudent }) => {
  const [selectedId, setSelectedId] = useState(null);

  // MOCK de alunos
  const students = [
    { id: 588, name: "Adilson Francisco Campos" },
    { id: 90, name: "Adriele Albertina Hilário Zango" },
    { id: 1, name: "Aldair Dala Gunza" },
    { id: 54, name: "Alfredo Aristides Feliciano Balundo" },
    { id: 872, name: "Alquiles Miranda Bamba Manuel" },
    { id: 227, name: "Arcanjo Valente Campos Adão" },
    { id: 599, name: "Azael Jorge Cavimbi Santos" },
    { id: 138, name: "Bernadeth Muvacômbuda de Carvalho Agostinho" },
    { id: 100, name: "Bernardino Junior Teixeira José" },
  ];

  const handleSelect = (student) => {
    setSelectedId(student.id);
    if (onSelectStudent) {
      onSelectStudent(student);
    }
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body p-0">

        {/* Título */}
        <div className="p-2 text-center fw-bold">
          Seleciona o aluno transferido:
        </div>

        {/* Tabela com scroll */}
        <div style={{ maxHeight: "420px", overflowY: "auto" }}>
          <table className="table table-hover mb-0">

            <thead className="table-primary">
              <tr>
                <th style={{ width: "80px" }}>ID</th>
                <th>NOME</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  onClick={() => handleSelect(student)}
                  style={{ cursor: "pointer" }}
                  className={selectedId === student.id ? "table-primary" : ""}
                >
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default StudentsTable;