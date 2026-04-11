export default function StudentsWithGrades({ data }) {

  return (
    <div className="table-responsive">

      <table className="table table-hover">

        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Aluno</th>
            <th>MAC</th>
            <th>NPP</th>
            <th>NPT</th>
            <th>MT1</th>
          </tr>
        </thead>

        <tbody>
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.notas?.mac}</td>
              <td>{s.notas?.npp}</td>
              <td>{s.notas?.npt}</td>
              <td>{s.notas?.mt1}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
