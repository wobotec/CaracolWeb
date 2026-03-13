export default function AcademicYearViewModal({ data, onClose }) {
    return (
        <div className="modal d-block">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Detalhes</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Ano:</strong> {data.year}</p>
                        <p><strong>Início:</strong> {data.startDate}</p>
                        <p><strong>Final:</strong> {data.endDate}</p>
                        <p><strong>Total Alunos:</strong> {data.totalStudents}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}