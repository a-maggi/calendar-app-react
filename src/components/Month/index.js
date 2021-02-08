import { addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, isSameMonth } from "date-fns";
import Day from './Day';
import './month.css';

const Month = ({ currentMonth, events, selectedDate, onDateClick }) => {

  //const formatStandard = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const renderMonth = () => {
    const rows = [];
    let days = [];
    let day = startDate;
    let first = true;
    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {
        days.push(
          <Day key={day} day={day} first={first} isSameMonth={isSameMonth(day, monthStart)} isSameDay={isSameDay(day, selectedDate)} onDateClick={onDateClick} events={events} />
        );
        day = addDays(day, 1);
      }
      first = false;
      rows.push(
        <div className="grid grid-cols-1 md:grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  }


  return (
    <>
      <div className="border-l-2 border-t-2 grid-rows-5 grid-flow-col  gap-0 ">{renderMonth()}</div>
    </>
  )
}

export default Month;