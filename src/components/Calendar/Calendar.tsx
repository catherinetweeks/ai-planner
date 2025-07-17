// import { CalendarApp } from "@schedule-x/calendar";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewDay } from "@schedule-x/calendar";
import '@schedule-x/theme-default/dist/calendar.css';

export function Calendar() {
  const calendar = useCalendarApp({
    views: [createViewDay()],
    events: [
      {
        id: '1',
        title: "Testing",
        start: "2025-01-01 00:00",
        end: "2025-01-01 01:00",
      }
    ],
    selectedDate: "2025-01-01"
  });

  if (!calendar) return null;

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}