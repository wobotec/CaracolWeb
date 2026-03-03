export default function AcademicYearTable({ years, onView, onDelete }) {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Ano Lectivo</th>
                        <th>Data Início</th>
                        <th>Data Fim</th>
                        <th>Total Alunos</th>
                        <th>Acções</th>
                    </tr>
                </thead>
                <tbody>
                    {years.map(year => (
                        <tr key={year.id}>
                            <td>{year.year}</td>
                            <td>{year.startDate}</td>
                            <td>{year.endDate}</td>
                            <td>{year.totalStudents}</td>
                            <td>
                                <button className="btn btn-sm btn-info me-2" onClick={() => onView(year)}>Ver</button>
                                <button className="btn btn-sm btn-danger" onClick={() => onDelete(year.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}