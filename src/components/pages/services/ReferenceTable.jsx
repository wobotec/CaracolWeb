export default function ReferenceTable({ references }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Referências</th>
                </tr>
            </thead>
            <tbody>
                {references.map(reference => (
                    <tr key={reference.id}>
                        <td>{reference.name}</td>
                           <td>    
                            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(reference)}>Editar</button> 
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(reference.id)}>Excluir</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
}