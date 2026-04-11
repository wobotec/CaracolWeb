export default function BankTable({ data }){
    return(
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Banco</th>
                        <th>Número</th>
                        <th>IBAN</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.banco}</td>
                            <td>{item.numero}</td>
                            <td>{item.iban}</td>
                            <td>
                                <button className="btn btn-light">Editar</button>
                                <button className="btn btn-light">Estado</button>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}