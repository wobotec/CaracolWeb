export default function StudentsWithoutGrades({ data, onSelect }) {

  return (
    <div className="table-responsive">

      <table className="table table-hover">

        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>

        <tbody>
          {data.map(s => (
            <tr key={s.id} onClick={() => onSelect(s)}>
              <td>{s.id}</td>
              <td>{s.name}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}
