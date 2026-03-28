import { useState } from "react"

export default function StudentConfirmForm({
    courses, classes, turmas
}){
    const [form, setForm] = useState({
        course: "",
        class: "",
        turma: "",
        special: false
    })
    const handleChange = (e) => {
        const {name, value, type, checked } = e.target

        setForm({
            ...form,
            [name]: type === "checkout" ? checked : value
        })
    }
    const selectedTurma = turmas.find( t => t.id == form.turma)

    const handleSubmit = () => {
        console.log("COnfirmado", form)
        alert("Matrícula confirmada!")
    }
    return (
        <div className="card p-3">
            <h6>Dados Académicos</h6>
            <div className="form-check mb-3">
                <input 
                    type="checkbox"
                    className="form-check-input"
                    name="special"
                    onChange={handleChange}
                />
                <label className="form-check-label">
                    Caso Especial
                </label>
            </div>
            <select 
                className="form-select mb-2"
                name="course"
                onChange={handleChange}
            >
                <option>Curso</option>
                {courses.map(c => {
                    <option key={c.id} value={c.id}>{c.name}</option>
                })}
            </select>
            <select
                className="form-select mb-2"
                name="class"
                onChange={handleChange}
            >
                <option>Classe</option>
                {classes.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>
            <select 
                className="form-select md-2"
                name="turma"
                onChange={handleChange}
            >
                <option>Turma</option>
                {turmas.map( t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                ))}
            </select>
            {selectedTurma && (
                <div className="mb-3 small text-muted">
                    <p>Período: {selectedTurma.periodo}</p>
                    <p>Capacidade: {selectedTurma.capacidade}</p>
                </div>
            )}
            <button
                className="btn btn-primary w-100"
                onClick={handleSubmit}
            >
                Confirmar
            </button>
        </div>
    )
}