import SuspensionHeader from "../../suspensao/SuspensionHeader";
import SuspensionTable from "../../suspensao/SuspensionTable";

export default function SuspensionPage() {

    return (

        <div className="container-fluid mt-4">

            <h3 className="mb-4 border-bottom border-primary pb-2 d-inline-block">
                Área de suspensão
            </h3>

            <SuspensionHeader />
            <SuspensionTable />

        </div>

    )
}