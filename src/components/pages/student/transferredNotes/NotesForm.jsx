import React from "react";

const NotesForm = () => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">

        {/* Título + Ano lectivo */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold m-0 border-bottom border-primary pb-1">
            Notas Para:
          </h5>

          <div>
            <label className="form-label small mb-1">Ano lectivo:</label>
            <select className="form-select form-select-sm">
              <option>2024/2025</option>
            </select>
          </div>
        </div>

        {/* Formulário */}
        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <select className="form-select">
            <option>Sem Opção</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Classe:</label>
          <select className="form-select">
            <option>1ª Classe</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Turma:</label>
          <select className="form-select">
            <option>1M/A</option>
          </select>
        </div>

        {/* Info da turma */}
        <div className="mb-3 small text-muted">
          <div>Turma pertencente ao período: <strong>Manhã</strong></div>
          <div>Capacidade máxima de Alunos: <strong>45</strong></div>
        </div>

        <div className="mb-3">
          <label className="form-label">Disciplina:</label>
          <select className="form-select">
            <option>Est. Meio</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Professor:</label>
          <input
            type="text"
            className="form-control"
            value="Florinda Wime Ngunda"
            readOnly
          />
        </div>

        {/* Botão redondo */}
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center mt-3">
  <button
    className="btn btn-primary d-flex align-items-center justify-content-center rounded-circle shadow"
    style={{
      width: "65px",
      height: "65px",
      fontSize: "26px",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    ✓
  </button>
</div>
        </div>

      </div>
    </div>
  );
};

export default NotesForm;