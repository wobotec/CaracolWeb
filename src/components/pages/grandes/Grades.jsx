import { useState } from "react"
import { studentsMock } from "./gradesData"

import GradeFilters from "../../grades/GradeFilters"
import StudentsWithoutGrades from "../../grades/StudentsWithoutGrades"
import StudentsWithGrades from "../../grades/StudentsWithGrades"
import GradeForm from "../../grades/GradeForm"

import PageBase from "../../Layout/PageBase/PageBase"

export default function GradesPage() {

  const [students, setStudents] = useState(studentsMock)
  const [selected, setSelected] = useState(null)

  const withoutGrades = students.filter(s => !s.notas)
  const withGrades = students.filter(s => s.notas)

  const handleSave = (id, notas) => {

    const updated = students.map(s =>
      s.id === id
        ? { ...s, notas }
        : s
    )

    setStudents(updated)
    setSelected(null)
  }

  return (
    <PageBase title="Lançamento de notas">
    <div className="container mt-4 row ">

      <div className="col-md-3 ">
      <h4 className="mb-3">Lançamento de notas</h4>
      {/* FILTROS */}
      <GradeFilters />
    </div>
      <div className="col-md-3">

        {/* ESQUERDA */}
        <div >
          <p className="text-center">Lista de alunos cuja as notas, não foram lançadas: </p>
          <StudentsWithoutGrades
            data={withoutGrades}
            onSelect={setSelected}
          />
        </div>

        {/* CENTRO */}
        <div >
          <h1>Atribuir notas</h1>
          <GradeForm
            student={selected}
            onSave={handleSave}
          />
        </div>
  </div>
        {/* DIREITA */}
        
        <div className="col-md-6" >  
          <p className="text-center">Lista de alunos cuja as notas, já foram lançadas: </p>
          <StudentsWithGrades data={withGrades} />
        </div>
    
    </div>
    </PageBase>
  )
}
