import React, { useReducer } from "react";

const actions = {
  ADD_EVENT: "ADD_EVENT",
  SET_EVENT: "SET_EVENT",
  DELETE_EVENT: "DELETE_EVENT",
  SET_MONTH: "SET_MONTH",
  SET_MODAL_FORM: "SET_MODAL_FORM",
  SET_DRAFT_EVENT: "SET_DRAFT_EVENT"
}

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_EVENT:
      return { ...state, events: [...state.events, action.value] }
    case actions.SET_EVENT:
      const index = state.events.findIndex(x => x._id === action.value._id);
      const eventsSet = [...state.events];
      eventsSet[index] = action.value;
      return { ...state,  events: [...eventsSet] }
    case actions.DELETE_EVENT:
      const eventsDelete = state.events.filter(x => x._id !== action.value);
      return { ...state, events: [...eventsDelete] }
    case actions.SET_MODAL_FORM:
      return { ...state, showModalForm: action.value }
    case actions.SET_DRAFT_EVENT:
      return { ...state, draftEvent: action.value }
    case actions.SET_MONTH:
      return { ...state, currentMonth: action.value }
    default:
      return state;
  }
}

const Context = React.createContext([{}, () => { }]); // Our empty Context ready.

const Provider = props => {
  const [state, dispatch] = useReducer(reducer, {
    currentMonth: new Date(),
    selectedDate: new Date(),
    showModalForm: false,
    events: [],
    draftEvent: {},
    setEvent: value => {
      dispatch({ type: actions.SET_EVENT, value })
    },
    addEvent: value => {
      dispatch({ type: actions.ADD_EVENT, value })
    },
    deleteEvent: value => {
      dispatch({ type: actions.DELETE_EVENT, value })
    },
    setDraftEvent: value => {
      dispatch({ type: actions.SET_DRAFT_EVENT, value })
    },
    setMonth: value => {
      dispatch({ type: actions.SET_MONTH, value })
    },
    setModalForm: value => {
      dispatch({ type: actions.SET_MODAL_FORM, value })
    }
  });

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export { Context, Provider };