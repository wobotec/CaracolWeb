import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

export default function CalendarWidget() {
  return (
    <div>
      <h2 className="font-semibold mb-3">Eventos</h2>
      <Calendar />
    </div>
  )
}
