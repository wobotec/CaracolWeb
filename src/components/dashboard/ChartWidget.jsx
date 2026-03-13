import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts"
  
  const data = [
    { mes: "Jan", freq: 80 },
    { mes: "Fev", freq: 75 },
    { mes: "Mar", freq: 90 },
    { mes: "Abr", freq: 85 },
    { mes: "Mai", freq: 95 },
    { mes: "Jun", freq: 70 },
    { mes: "Jul", freq: 80 },
    { mes: "Ago", freq: 85 },
    { mes: "Set", freq: 90 },
    { mes: "Out", freq: 95 },
    { mes: "Nov", freq: 80 },
    { mes: "Dez", freq: 85 },
  ]
  
  export default function ChartWidget() {
    return (
      <div>
        <h2 className="font-semibold mb-4">Frequência mensal</h2>
  
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="freq" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
  