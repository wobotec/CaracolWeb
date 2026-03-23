import ScheduleFilter from "../../schedule/ScheduleFilter"
import ScheduleInfo from "../../schedule/ScheduleInfo"
import ScheduleTable from "../../schedule/ScheduleTable"

export default function SchedulePage(){

return(

<div className="container mt-4">

<h3 className="mb-3">Horário</h3>

<ScheduleInfo/>

<div className="row">

<div className="col-md-4">
<ScheduleFilter/>
</div>

<div className="col-md-8">
<ScheduleTable/>
</div>

</div>

</div>

)

}