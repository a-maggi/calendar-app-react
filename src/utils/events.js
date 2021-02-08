import { parse, isSameDay } from "date-fns";

export const filterEventsbyDay = (events, day) => {
  return orderByDate(events.filter(e => isSameDay(formatDate(e.date), day)))
}

export const orderByDate = (list) => {
  return list.sort(function(a,b){
    return formatDateTime(`${b.date} ${b.time}`) - formatDateTime(`${a.date} ${a.time}`);
  });
}

export const formatDate = (date) => {
  return parse(date, "yyyy-MM-dd", new Date());
}

export const formatDateTime = (date) => {
  return parse(date, "yyyy-MM-dd HH:mm", new Date());
}