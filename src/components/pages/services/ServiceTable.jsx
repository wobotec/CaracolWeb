export default function ServiceTable({ services }) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Serviços</th>
                    <th>Regime</th>
                    <th>Imposto</th>
                    <th>Taxa</th>
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                    <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>{service.regime}</td>
                        <td>{service.imposto}</td>
                        <td>{service.taxa}</td>
                        <td>    
                            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(service)}>Editar</button> 
                            <button className="btn btn-sm btn-danger" onClick={() => onDelete(service.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}