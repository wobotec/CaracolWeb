export default function CourseFilter({ courses, selected, onSelect}){
    return (
        <div className="card p-3">
            <h6>Escolha o curso que desejas, para ver as suas respectivas classes.</h6>
            <label className="form-label text-center">Curso:</label>
            <select
                className="form-select mb-3"
                value={selected}
                onChange={(e) => onSelect(e.target.value)}>
                    <option value="">Selecionar curso</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
        </div>
    )
}