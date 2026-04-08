export default function GradeFilters() {
  return (
    <div className="card p-3 mb-3">

      <div >

        <div style={{ padding: "10px"}}>
          <label htmlFor="">Ano lectivo: </label><br />
          <select className="form-select">
            <option>2023/2024</option>
          </select>
        </div>

        <div style={{ padding: "10px"}}>
          <label htmlFor="">Trimeste: </label><br />
          <select className="form-select">
            <option>1º Trimestre</option>
          </select>
        </div>

        <div style={{ padding: "10px"}}>
          <label htmlFor="">Curso: </label><br />
          <select className="form-select">
            <option>Sem opção</option>
          </select>
        </div>

        <div style={{ padding: "10px"}}>
          <label htmlFor="">Classe: </label><br />
          <select className="form-select">
            <option>1ª Classe</option>
          </select>
        </div>
        <div style={{ padding: "10px" }}>
          <p>Turma pertecente ao período: Manhã Capacidade máxima de Alunos: 45</p>
        </div>

        <div style={{ padding: "10px"}}>
          <label htmlFor="" >Turma: </label><br />
          <select className="form-select">
            <option>1M/A</option>
          </select>
        </div>

        <div style={{ padding: "10px"}}>
          <select className="form-select">
            <label htmlFor="">Disciplina: </label><br />
            <option>L. Portuguesa</option>
          </select>
          <p>Professor: MIguel Filipe Vuala</p>
        </div>
        <div style={{ padding: "10px"}}>
          <button className="btn btn-primary">Buscar</button>
        </div>

      </div>

    </div>
  )
}
