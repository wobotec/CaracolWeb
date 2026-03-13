export default function DashboardGrid() {
  return (
    <div className="row g-4">

      {/* GRÁFICO */}
      <div className="col-lg-8">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="mb-3">Frequência mensal</h5>

            <div
              style={{
                height: "250px",
                background: "#f8f9fa",
                borderRadius: "8px"
              }}
              className="d-flex align-items-center justify-content-center text-muted"
            >
              gráfico aqui
            </div>

          </div>
        </div>
      </div>

      {/* TAREFAS */}
      <div className="col-lg-4">
        <div className="card shadow-sm border-0 h-100">
          <div className="card-body">
            <h5 className="mb-3">Tarefas pendentes</h5>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Lançar notas
              </li>
              <li className="list-group-item">
                Validar matrículas
              </li>
              <li className="list-group-item">
                Reunião pedagógica
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* CALENDÁRIO */}
      <div className="col-12">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h5 className="mb-3">Eventos próximos</h5>

            <div
              style={{
                height: "200px",
                background: "#f8f9fa",
                borderRadius: "8px"
              }}
              className="d-flex align-items-center justify-content-center text-muted"
            >
              calendário aqui
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
