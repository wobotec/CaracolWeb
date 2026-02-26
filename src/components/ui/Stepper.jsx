export default function Stepper({step}) {
    const steps = [
        {id: 1, label: "Dados pessoais"},
        {id: 2, label: "Endereço"},
        {id: 3, label: "Documentos e Responsáveis"}
    ]
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center">
                {steps.map((item, index) => {
                    const isActive = step === item.id
                    const isCompleted = step > item.id
                    return (
                        <div key={item.id} className="d-flex flex-column align-items-center flex-fill position-relative">
                            {/* Linhas */}
                            {index !== 0 && (
                                <div style={{ position: "absolute", left: "-50%", width: "100%", top: "20px", height: "3px", backgroundColor: isCompleted ? "#198754" : "#dee2e6", zIndex: 0 }} 
                                /> 
                            )}
                            {/* Circulo */}
                            <div className="rounded-circle d-flex justify-content-center align-items-center fw-bold" style={{ width: "40px", height: "40px", zIndex: 1, backgroundColor: isCompleted ? "#198754" : isActive ? "#0d6efd" : "#dee2e6", color: isActive || isCompleted ? "#fff" : "#000" }}>
                                {isCompleted ? "✓" : item.id}  
                            </div>
                            {/* Texto */}
                            <small className={`mt-2 text-center ${isActive ? "text-primary fw-semibold" : "text-muted"}`}>{item.label}
                            </small>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}   