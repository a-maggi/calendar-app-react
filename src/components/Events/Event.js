import { useContext } from 'react';
import './event.css';

import { Context } from "../../context";

const Event = (props) => {
  const { setDraftEvent,setModalForm } = useContext(Context); 
  const { time, title, color } = props;
  const showEvent = (e) => {
    setDraftEvent(props);
    setModalForm(true)
    e.stopPropagation(); 
  }
  return (
    <>
      <div className="event-card text-sm font-medium" onClick={showEvent} style={{backgroundColor: color}}>
        <span className="time font-bold">{time}</span>
        <span className="title">{title}</span>
      </div>
    </>
  )
}

export default Event;