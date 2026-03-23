export default function AcademicHistory({ history }){
    return (
        <div className="card p-3 mt-3">
            <h6>Outras classes frequentadas</h6>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Curso</th>
                        <th>Classe</th>
                        <th>Turma</th>
                        <th>Ano</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((h, i) =>(
                        <tr key={i}>
                            <td>{h.curso}</td>
                            <td>{h.classe}</td>
                            <td>{h.turma}</td>
                            <td>{h.ano}</td>
                            <td className="text-success">{h.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}