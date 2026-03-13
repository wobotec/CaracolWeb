export default function PaymentsHistory() {
  const payments = [
    { month: "Janeiro", status: "Pago" },
    { month: "Fevereiro", status: "Pago" },
    { month: "Março", status: "Em atraso" },
  ];

  return (
    <div>
      <h5>Histórico de Mensalidades</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={i}>
              <td>{p.month}</td>
              <td>
                <span
                  className={`badge ${
                    p.status === "Pago"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}