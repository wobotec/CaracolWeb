import { useState } from "react"

export default function GradeModal({ student, onClose, onSave }) {

  const [notas, setNotas] = useState({
    mac: "",
    npp: "",
    npt: ""
  })

  if (!student) return null

  const handleChange = (e) => {
    setNotas({
      ...notas,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-4">

          <div className="d-flex justify-content-between">
            <h5>Atribuir notas</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <p className="mt-2">{student.name}</p>

          <div className="d-flex gap-2 mb-3">

            <input
              name="mac"
              placeholder="MAC"
              className="form-control"
              onChange={handleChange}
            />

            <input
              name="npp"
              placeholder="NPP"
              className="form-control"
              onChange={handleChange}
            />

            <input
              name="npt"
              placeholder="NPT"
              className="form-control"
              onChange={handleChange}
            />

          </div>

          <button
            className="btn btn-primary w-100"
            onClick={() => onSave(student.id, notas)}
          >
            Salvar
          </button>

        </div>
      </div>
    </div>
  )
}
