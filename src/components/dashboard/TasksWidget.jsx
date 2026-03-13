export default function TasksWidget() {
    const tasks = [
      "Lançar notas",
      "Reunião com professores",
      "Atualizar sistema",
    ]
  
    return (
      <div>
        <h2 className="font-semibold mb-3">Tarefas</h2>
  
        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t}
              className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  