export default function DisciplineFilter() {

    return (

        <div className="card p-3">
            <div>
                <div style={{ padding: "10px"}}>
                    <label>Ano lectivo</label><br />
                    <select className="form-select">
                        <option>2023/2024</option>
                    </select>
                </div>
                <div style={{ padding: "10px"}}>
                    <label>Curso</label><br />
                    <select className="form-select mb-3">
                        <option>Sem Opção</option>
                    </select>
                </div>
                <div style={{ padding: "10px"}}>
                    <label>Classe</label><br />
                    <select className="form-select mb-3">
                        <option>1ª Classe</option>
                    </select>
                </div>
                <div style={{ padding: "10px"}}>
                    <label>Turma</label><br />
                    <select className="form-select mb-3">
                         <option>1M/A</option>
                    </select>
                </div>
                <div style={{ padding: "10px" }}>
                    <p>Turma pertecente ao período: Manhã Capacidade máxima de Alunos: 45</p>
                </div>
                <div style={{ padding: "10px"}}>
                    <button className="btn btn-primary " style={{ width: "100%"}}>
                        Buscar
                    </button>
                </div>
            </div>
        </div>

    )

}