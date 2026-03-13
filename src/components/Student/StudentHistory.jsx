import HistoryTimeline from './HistoryTimeline'
import GradeSummary from './GradeSummary'
import ClassComparison from './ClassComparison'
import ExportHistoryPDF from './ExportHistoryPDF'

export default function StudentHistory({ student }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <div className='d-flex justify-content-between mb-4'>
                    <h5 >Histórico Acadêmico</h5>
                    <ExportHistoryPDF student={student} />
                </div>
                <HistoryTimeline periods={student.periods} />
                <GradeSummary periods={student.periods} />
                <ClassComparison periods={student.periods} />
            </div>
        </div>
    )
}