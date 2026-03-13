export default function StatsWidget() {
    const stats = [
      { label: "Alunos", value: 320 },
      { label: "Professores", value: 28 },
      { label: "Turmas", value: 12 },
    ]
  
    return (
      <div>
        <h2 className="font-semibold mb-4">Estatísticas</h2>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-blue-50 dark:bg-zinc-800 p-3 rounded"
            >
              <p className="text-sm">{s.label}</p>
              <p className="text-xl font-bold">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  