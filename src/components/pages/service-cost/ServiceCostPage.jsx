import CostFilter from "../../service-cost/CostFilter";
import CostTable from "../../service-cost/CostTable";

export default function ServiceCostPage(){

return(

<div className="container mt-4">

<h3 className="mb-4">Custo de serviço</h3>

<div className="row">

<div className="col-md-4">
<CostFilter/>
</div>

<div className="col-md-8">
<CostTable/>
</div>

</div>

</div>

)

}