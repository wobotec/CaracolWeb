import { useState, useEffect } from "react"

export default function GradeForm({ student, onSave }) {

  const [notas, setNotas] = useState({
    mac: "",
    npp: "",
    npt: ""
  })

  useEffect(() => {
    if (student) {
      setNotas({ mac: "", npp: "", npt: "" })
    }
  }, [student])

  if (!student) {
    return (
      <div className="card p-3 text-center">
        <p>Selecione um aluno</p>
      </div>
    )
  }

  const handleChange = (e) => {
    setNotas({
      ...notas,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="card p-3">

      <h6>{student.name}</h6>

      <div className="d-flex gap-2 my-3">

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
        className="btn btn-success w-100"
        onClick={() => onSave(student.id, notas)}
      >
         Atribuir Nota
      </button>

    </div>
  )
}
