import { useContext } from 'react';
import { Context } from "../../context";
import Event from './Event';
import { filterEventsbyDay } from 'utils/events';
const Events = ({ day }) => {
  const { events } = useContext(Context); // Our values from Context
  const eventsFiltered = filterEventsbyDay(events, day);
  return (
    <>
      {eventsFiltered.map(event => <Event key={event._id} {...event} />)}
    </>
  )
}

export default Events;