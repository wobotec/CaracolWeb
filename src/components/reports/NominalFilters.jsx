export default function NominalFilters() {

  return (
    <div className="card p-3" style={{marginBottom: "50px", backgroundColor: "white", borderRadius: "10px", padding: "10px"}}>

      <h2><strong>Lista nominal</strong></h2>
    <div className="bg-primary" style={{width: "10%", height: "5px", borderRadius: "10px"}}></div>
      <div className="mb-2" style={{paddingBottom: "20px"}}>
        <label>Ano lectivo</label> <br />
        <select className="form-select">
          <option>2025/2026</option>
        </select>
      </div>

      <div className="mb-2" style={{paddingBottom: "20px"}}>
        <label>Curso</label> <br />
        <select className="form-select">
          <option>Sem Opção</option>
        </select>
      </div>

      <div className="mb-2" style={{paddingBottom: "20px"}}>
        <label>Classe</label><br />
        <select className="form-select">
          <option>1ª Classe</option>
        </select>
      </div>

      <div className="mb-3" style={{paddingBottom: "20px"}}>
        <label>Turma</label><br />
        <select className="form-select">
          <option>1M/A</option>
        </select>
      </div>

      <button className="btn btn-primary w-100" style={{width: "100%"}}>
        Buscar
      </button>

    </div>
  )
}
