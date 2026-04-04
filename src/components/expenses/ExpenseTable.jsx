export default function ExpenseTable({data, onDelete}){
    return(
        <div className="table-responsive">
            <table className="table table-houver">
                <thead className="table-light">
                    <tr>
                        <th>Tipo</th>
                        <th>Motivo</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Origem</th>
                        <th>Usuário</th>
                        <th>Acções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.tipo}</td>
                            <td>{item.motivo}</td>
                            <td>{item.valor}</td>
                            <td>{item.data}</td>
                            <td>{item.origem}</td>
                            <td>{item.usuario}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2">
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(item.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}