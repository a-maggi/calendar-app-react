import { format } from "date-fns";
import Events from 'components/Events';

const Day = ({ day, first, isSameMonth, isSameDay, onDateClick, events }) => {

 const formatMonth = format(day, "EEEE");
 const formatDay = format(day, "d");

  return (
    <>
      <div
        className={`day-box border-r-2 border-b-2 p-2 ${!isSameMonth? "hidden md:inline disabled": isSameDay? "selected" : ""}`}
        key={day}
        onClick={(e) => onDateClick(e,day)}
      >
        {first && <div className="number pb-2 text-sm text-center hidden md:block">{formatMonth}</div>}
        <div className="day-number pb-2 font-semibold text-black text-sm text-center"><span>{formatDay}</span></div>
        <div className="content">
          { isSameMonth && <Events day={day} /> }
        </div>
      </div>
    </>
  )
}

export default Day;