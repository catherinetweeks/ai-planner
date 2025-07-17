import { Calendar } from './Calendar.tsx'

function CalendarLayout() {
  return (
    <div
    className="flex flex-col bg-zinc-100 rounded-xl max-w-full p-10">
      Calendar will go here
      <Calendar />
    </div>
  );
}

export default CalendarLayout;