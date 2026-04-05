export default function StudentStats({ student }) {
    const total = student.length
    const activos = student.filter(s => s.estado === "Activo").length
    const desactivos = student.filter(s => s.estado !== "Activo").length

    return (
        <div className="row">
            <div className="col-lg-3 ">
                <div className="widget style1 white-bg">
                    <div className="row ">
                        <div className="col-xs-4 text-center line">
                            <i className="fa fa-user-circle fa-5x"></i>
                        </div>
                        <div className="col-xs-8 text-right">
                            <span> TOTAL DE ALUNOS</span>
                            <h2 className="font-bold line">{total}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="widget style1 white-bg">
                    <div className="row">
                        <div className="col-xs-4 totacol">
                            <i className="fa fa-user-circle fa-5x"></i>
                        </div>
                        <div className="col-xs-8 text-right">
                            <span> ACTIVOS </span>
                            <h2 className="font-bold totacol">{activos}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="widget style1 white-bg">
                    <div className="row">
                        <div className="col-xs-4 text-danger">
                            <i className="fa fa-user-circle fa-5x"></i>
                        </div>
                        <div className="col-xs-8 text-right ">
                            <span> NÃO ACTIVOS </span>
                            <h2 className="font-bold text-danger">{desactivos}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="widget style1">
                    <div className="row">
                        <div className="col-xs-8 text-right ">
                            <button className="btn btn-primary mt-3" onclick="return adicionar();">Adicionar Aluno</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}