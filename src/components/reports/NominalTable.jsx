
export default function NominalTable({ data }) {

  return (
    <div className="card p-3">

      {/* HEADER */}
      <div className="d-flex justify-content-between mb-3" style={{backgroundColor: "white", borderRadius: "10px", padding: "10px", display: "flex", justifyContent: "space-between"}}>
        <div>
          <strong>Curso:</strong> Sem Opção <br />
          <strong>Classe:</strong> 1ª Classe
        </div>

        <div>
          <strong>Turma:</strong> 1M/A <br />
          <strong>Ano:</strong> 2025/2026
        </div>

        <div>
            <strong>Turno:</strong> Manhã <br /> 
          <strong>Total:</strong> {data.length}
        </div>
      </div>
<br />

      {/* TABELA */}
      <div className="table-responsive" style={{ maxHeight: "400px", overflowY: "auto", backgroundColor: "white" }}>
        <table className="table table-hover table-sm">

          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Encarregado</th>
              <th>Contacto</th>
              <th>Inscrito por</th>
              <th>Data de inscrição</th>
            </tr>
          </thead>

          <tbody>
            {data.map(aluno => (
              <tr key={aluno.id}>
                <td>{aluno.id}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.idade}</td>
                <td>{aluno.encarregado}</td>
                <td>{aluno.contacto}</td>
                <td>{aluno.inscritoPor}</td>
                <td>{aluno.data}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}
