export default function DataTable({ 
    data, 
    currentPage, 
    setCurrentPage 
}) {
    return (
        <div className="table-responsive">
            <table className="table table-striped align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th>Turma</th>
                        <th>Status</th>
                        <th>Acções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center">Nenhum dado encontrado</td>
                        </tr>
                    )}
                    {data.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.registration}</td>
                            <td>{student.class}</td>
                            <td>
                                <span className={`badge ${student.status === 'Ativo' ? 'bg-success' : 'bg-secondary'}`}>
                                    {student.status}
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-primary me-2">Editar</button>
                                <button className="btn btn-sm btn-info me-2">Ver</button>
                                <button className="btn btn-sm btn-danger">desactivo</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Paginação */}
            <nav>
                <ul className="pagination justify-content-end">
                    <li className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(prev => prev - 1)} >
                            Anterior
                        </button>
                    </li>
                    <li className="page-item">
                        <span className="page-link">
                            Página {currentPage}
                        </span>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={() => setCurrentPage(prev => prev + 1)}>
                            Próxima
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}