import { useContext } from 'react';
import { Context } from "./context";
import { uuid } from "utils/maths";
import { format } from "date-fns";
import NavActions from 'components/NavActions';
import Modal from 'components/Modal';
import FormEvent from 'components/FormEvent';
import Month from 'components/Month';
import Layout from 'components/Layout';

function App() {
  
  const { events, setEvent, draftEvent, setDraftEvent, currentMonth, selectedDate, showModalForm, addEvent, deleteEvent, setModalForm, setMonth } = useContext(Context); // Our values from Context


  const changeModal = () => {
    setModalForm(!showModalForm)
  }

  const onDateClick = (e, day) => {
    e.stopPropagation();
    setDraftEvent({ date: format(day, "yyyy-MM-dd") })
    changeModal();
  };


  const handleSubmitEvent = (event) => {
    // Logic to send to some api
    // Here we only use the state management of React
    if (!event._id)
      addEvent({ ...event, _id: uuid() });
    else
      setEvent(event);
  }

  const handleDeleteEvent = (event) => {
    // Logic to send to some api
    // Here we only use the state management of React
    deleteEvent(event);
  }


  return (
    <Layout>
      <NavActions currentMonth={currentMonth} setMonth={setMonth} showModal={changeModal} />
      <Month currentMonth={currentMonth} events={events} onDateClick={onDateClick} selectedDate={selectedDate} />
      <Modal visible={showModalForm} handleVisible={changeModal}>
        <FormEvent handleSubmit={handleSubmitEvent} handleDelete={handleDeleteEvent} formData={draftEvent} handleVisible={changeModal} setDraftEvent={setDraftEvent} />
      </Modal>
    </Layout>
  );
}

export default App;
