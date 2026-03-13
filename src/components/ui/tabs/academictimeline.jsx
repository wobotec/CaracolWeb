export default function AcademicTimeline() {
  const timeline = [
    { year: "2022", event: "Ingresso na instituição" },
    { year: "2023", event: "Conclusão do 1º ano" },
    { year: "2024", event: "Estágio curricular" },
  ];

  return (
    <div>
      <h5 className="mb-3">Linha do Tempo Acadêmica</h5>

      <ul className="list-group">
        {timeline.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong className="me-2">{item.year}</strong>
            {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
}