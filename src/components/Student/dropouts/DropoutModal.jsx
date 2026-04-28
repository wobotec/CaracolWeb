import { useState } from "react"

export default function DropoutModal({ show, onClose, onSave }) {

  const [form, setForm] = useState({
    nome: "",
    encarregado: "",
    contacto: "",
    motivo: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!form.nome || !form.motivo) return
    onSave(form)
    onClose()
  }

  if (!show) return null

  return (
    <div className="modal d-block" style={{ background: "#00000066" }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">

          <h5>Registrar Desistência</h5>

          <input
            name="nome"
            placeholder="Nome do aluno"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="encarregado"
            placeholder="Encarregado"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            name="contacto"
            placeholder="Contacto"
            className="form-control mb-2"
            onChange={handleChange}
          />

          <textarea
            name="motivo"
            placeholder="Motivo da desistência"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>

            <button className="btn btn-danger" onClick={handleSubmit}>
              Registrar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
