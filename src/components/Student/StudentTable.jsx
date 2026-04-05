export default function StudentTable({ student }) {
    return (
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <div className="table-responsive">
                            <table className="table table-hover dataTables-example">
                                <thead className="table-light">
                                    <tr>
                                        <th>ID</th>
                                        <th>NOME</th>
                                        <th>SEXO</th>
                                        <th>BI</th>
                                        <th>RESIDÊNCIA</th>
                                        <th>CONTACTO</th>
                                        <th>NASCIMENTO</th>
                                        <th>ENCARREGADO</th>
                                        <th>ESTADO</th>
                                        <th>ACÇÕES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {student.map(s => (
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
                                                <button class="btn btn-success btn-xs" data-bs-toggle="tooltip" data-bs-original-title="Detalhes" id={s.id} onclick="return visualizar('@aluno.Id');">
                                                    <i class="fa fa-eye"></i>
                                                </button>
                                                <button class="btn btn-primary btn-xs" data-bs-toggle="tooltip" data-bs-original-title="Atualizar" id={s.id} onclick="return atualizar('@aluno.Id');">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )    
}

