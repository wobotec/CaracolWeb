export default function CostFilter(){

return(

<div className="card p-3">

<h6 className="mb-3">
Preencha os campos para ver os custos de serviços de uma classe
</h6>

<label>Ano lectivo</label>
<select className="form-select mb-2">
<option>2023/2024</option>
</select>

<label>Departamento</label>
<select className="form-select mb-2">
<option>Ensino Geral</option>
</select>

<label>Curso</label>
<select className="form-select mb-2">
<option>Sem Opção</option>
</select>

<label>Classe</label>
<select className="form-select mb-3">
<option>1ª Classe</option>
</select>

<button className="btn btn-primary w-100">
Buscar
</button>

</div>

)

}