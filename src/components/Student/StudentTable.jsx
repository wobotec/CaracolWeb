export default function StudentTable({ student }){
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>BI</th>
                        <th>Pai</th>
                        <th>Mãe</th>
                        <th>Provincia</th>
                        <th>Municipio</th>
                        <th>Residencia</th>
                        <th>Contacto</th>
                        <th>Nascimento</th>
                        <th>Encarregado</th>
                        <th>Estado</th>
                        <th>Acções</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map( s => (
                        <tr
                            key={s.id}
                            className={
                                s.estado === "Desactivo" 
                                ? "table-danger"
                                : ""
                            }
                        >
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.sexo}</td>
                            <td>{s.bi}</td>
                            <td>{s.father}</td>
                            <td>{s.mother}</td>
                            <td>{s.provincia}</td>
                            <td>{s.municipio}</td>
                            <td>{s.residencia}</td>
                            <td>{s.contacto}</td>
                            <td>{s.nascimento}</td>
                            <td>{s.encarregado}</td>
                            <td>
                                <span
                                    className={
                                        s.estado === "Activo"
                                        ? "text-success"
                                        : "text-danger"
                                    }
                                >
                                {s.estado}
                                </span>
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-light  me-2"
                                >
                                    Visualizar
                                </button>
                                <button
                                    className="btn btn-sm btn-warning"
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}