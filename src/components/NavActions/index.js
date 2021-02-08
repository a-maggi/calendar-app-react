import { format, addMonths, subMonths } from "date-fns";
import Icon from "../../assets/icons";
import './navaction.css';

const NavActions = ({ currentMonth, setMonth, showModal }) => {
  const dateFormat = "MMM yyyy";
  const date = format(currentMonth, dateFormat);
  const nextMonth = () => {
    setMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setMonth(subMonths(currentMonth, 1));
  };

  return (
    <div className="header flex flex-row  justify-between py-4 items-center">
      <div className="selector-month flex">
        <button className="btn-left mx-2" onClick={prevMonth}><Icon icon="left" /></button>
        <div className="date-calendar">
          <span className="text-xl font-semibold">
            {date}
          </span>
        </div>
        <button className="btn-right mx-2" onClick={nextMonth}><Icon icon="right"/></button>
      </div>
      <div className="col-start-6 content-end rig">
        <button className="btn flex items-center" id="showModal" onClick={() => showModal()}>
          <Icon icon="add" color="#fff"></Icon> <span>Add Event</span>
        </button>
      </div>
    </div>

  )
}

export default NavActions;