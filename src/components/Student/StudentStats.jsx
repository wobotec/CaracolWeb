export default function StudentStats({ student }){
    const total = student.length
    const activos = student.filter(s => s.estado === "Activo").length
    const desactivos = student.filter(s => s.estado !== "Activo").length

    return(
        <div class="row">
        <div class="col-lg-3">
            <div class="widget style1 white-bg">
                <div class="row">
                    <div class="col-xs-4 text-center line">
                        <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                    <div class="col-xs-8 text-right">
                        <span> TOTAL DE ALUNOS</span>
                        <h2 class="font-bold line">4.232</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="widget style1 white-bg">
                <div class="row">
                    <div class="col-xs-4 totacol">
                        <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                    <div class="col-xs-8 text-right">
                        <span> ACTIVOS </span>
                        <h2 class="font-bold totacol">26.34</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="widget style1 white-bg">
                <div class="row">
                    <div class="col-xs-4 text-danger">
                        <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                    <div class="col-xs-8 text-right ">
                        <span> NÃO ACTIVOS </span>
                        <h2 class="font-bold text-danger">260</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="widget style1">
                <div class="row">                    
                    <div class="col-xs-8 text-right ">
                        <button class="btn btn-primary mt-3" onclick="return adicionar();">Adicionar Aluno</button>                                                
                    </div>
                </div>
            </div>
        </div>
    </div>   
    )
}