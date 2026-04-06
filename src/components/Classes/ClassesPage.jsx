import ClassInfo from "./ClassInfo";
import ClassFilter from "./ClassFilter";
import ClassesTable from "./ClassesTable";

export default function ClassesPage(){

return(

<div className="container mt-4">

<h3 className="mb-3">Turmas</h3>

<ClassInfo/>

<div className="row">

<div className="col-md-4">
<ClassFilter/>
</div>

<div className="col-md-8">
<ClassesTable/>
</div>

</div>

</div>

)

}