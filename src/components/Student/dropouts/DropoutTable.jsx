export default function DropoutTable({ data }) {

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

      {/* SE NÃO TEM DADOS */}
      {data.length === 0 ? (
        <div className="text-center py-5">
          <h2 className="text-blue" style={{color: "blue", fontWeight: "bolder"}}>
            Nenhum Registro<br />Guardado por apresentar.
          </h2>
        </div>
      ) : (

        <div className="table-responsive">
          <table className="table table-hover">

            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Encarregado</th>
                <th>Contacto</th>
                <th>Motivo</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {data.map(d => (
                <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.nome}</td>
                  <td>{d.encarregado}</td>
                  <td>{d.contacto}</td>
                  <td>{d.motivo}</td>
                  <td>{d.data}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      )}

    </div>
  )
}
