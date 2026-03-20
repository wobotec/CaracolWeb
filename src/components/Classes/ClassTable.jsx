export default function ClassTable({
    classes, onEdit, onDelete   
}){
    return (
        <table className="table table-bordered">
            <thead className="table-light">
                <tr>
                    <th>Classes</th>
                    <th>Tipo</th>
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
                {classes.map(c =>(
                    <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.type}</td>
                        <td>
                            <button
                                className="btn btn-sm btn-warning me-2"
                                onClick={() => onEdit(c)}>
                                    Editar
                            </button>
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={() => onDelete(c.id)}>
                                    Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}