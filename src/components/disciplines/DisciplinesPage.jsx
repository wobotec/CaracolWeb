import DisciplineFilter from "./DisciplineFilter"
import DisciplineInfo from "./DisciplineInfo"
import DisciplineTable from "./DisciplineTable"

export default function DisciplinesPage(){

return(

<div className="container mt-4">

<h3 className="mb-3">Disciplinas</h3>

<DisciplineInfo/>

<div className="row">

<div className="col-md-4">
<DisciplineFilter/>
</div>

<div className="col-md-8">
<DisciplineTable/>
</div>

</div>

</div>

)

}