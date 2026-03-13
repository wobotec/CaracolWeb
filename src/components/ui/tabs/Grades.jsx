export default function Grades() {
  return (
    <div>
      <h5>Notas</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matemática</td>
            <td>16</td>
          </tr>
          <tr>
            <td>SEAC</td>
            <td>18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}