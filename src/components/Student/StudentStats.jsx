export default function StudentStats({ student }){
    const total = student.length
    const activos = student.filter(s => s.estado === "Activo").length
    const desactivos = student.filter(s => s.estado !== "Activo").length

    return(
        <div className="row text-center mb-3">
            <div className="col-md-4">
                <div className="card p-2">
                    <h6>Total de Alunos</h6>
                    <strong>{total}</strong>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-2 text-success">
                    <h6>Activos</h6>
                    <strong>{activos}</strong>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card p-2 text-danger">
                    <h6>Desactivos</h6>
                    <strong>{desactivos}</strong>
                </div>
            </div>
        </div>
    )
}