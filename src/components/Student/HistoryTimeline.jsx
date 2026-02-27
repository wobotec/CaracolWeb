export default function HistoryTimeline({ periods }) {
    return (
        <div className="mb-4">
            <h6>Períodos Lectivos</h6>
            <div className="list-group">
                {periods.map((period, index) => (
                    <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{period.year}</strong> - {period.semester}
                        </div>
                        <span className={`badge ${period.status === 'aprovado' ? 'bg-success' : 'bg-danger'}`}>
                            {period.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}