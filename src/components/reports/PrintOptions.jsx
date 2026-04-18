export default function PrintOptions() {

  return (
    <div className="card p-3">

      <h6 className="text-center">Modo de Impressão</h6>

      <div className="form-check">
        <input type="radio" name="print" className="form-check-input" />
        <label>Administrativo (Todos)</label>
      </div>

      <div className="form-check">
        <input type="radio" name="print" className="form-check-input" />
        <label>Lista Complexa</label>
      </div>

      <div className="form-check">
        <input type="radio" name="print" className="form-check-input" />
        <label>Lista (Presença)</label>
      </div>
     <div className="form-check">
        <input type="radio" name="print" className="form-check-input" defaultChecked />
        <label>Lista (Por idade)</label>
      </div>
      <div className="form-check">
        <input type="radio" name="print" className="form-check-input" defaultChecked />
        <label>Lista Simples</label>
      </div>

      <button
        className="btn btn-primary mt-3"
        onClick={() => window.print()}
        style={{ width: "100%"}}
      >
         Imprimir Lista
      </button>

    </div>
  )
}
