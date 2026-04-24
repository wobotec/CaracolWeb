import React from "react";

const NotesStatus = ({ hasNotes = false }) => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body">

        {/* Título */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold border-bottom border-primary pb-1 m-0">
            Notas já lançadas:
          </h6>
        </div>

        {/* CONDIÇÃO */}
        {hasNotes ? (
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>DISCIPLINAS</th>
                  <th>MF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Matemática</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>Português</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Biologia</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>Física</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
            
            <h5 className="text-primary fw-bold">
              Ainda não se Atribuiu notas a este aluno.
            </h5>

            <small className="text-muted">
              Verifique se o mesmo é aluno transferido ou interno.
            </small>

          </div>
        )}

      </div>
    </div>
  );
};

export default NotesStatus;