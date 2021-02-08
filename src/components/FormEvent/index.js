import { useState } from 'react';
import FormElement from 'components/Form/FormElement';
import Icon from 'assets/icons';
import Weather from 'components/Weather';
import Modal from 'components/Modal';
import './formevent.css';

const FormEvent = ({ handleVisible, handleSubmit, handleDelete, formData, setDraftEvent }) => {
  const colors = [
    '#f6beb7',
    '#e8daa8',
    '#ddd8f4',
    '#b6e2dd'
  ]
  const [event, setEvent] = useState(
    {
      _id: formData._id ? formData._id : '',
      date: formData.date ? formData.date : '',
      time: formData.time ? formData.time : '',
      title: formData.title ? formData.title : '',
      color: formData.color ? formData.color : '',
      city: formData.city ? formData.city : ''
    }
  )

  const [disabled, setDisabled] = useState(formData.title ? true : false);
  const [weatherReady, setWeatherReady] = useState(false);
  const [isDeletedAlert, setDeletedAlert] = useState(false);


  const onSubmit = (e) => {
    handleSubmit(event);
    handleClose(e);
  }

  const handleClose = (e) => {
    setDraftEvent(false)
    handleVisible();
    e.preventDefault();
  }
  const updateFormData = ({ name, value }) => {
    setEvent({
      ...event,
      [name]: value
    })
  }

  const openDialog = (e) => {
    setDeletedAlert(true);
    e.preventDefault();
  }

  const onDelete = (e) => {
    handleDelete(formData._id);
    setDeletedAlert(false);
    handleClose(e);
  }

  return (
    <>
      <div className="header flex justify-between flex-row items-center">
        <span className="text-lg font-bold text-black">{formData.title && disabled ? "Detail of Event" : formData.title && !disabled ? "Modify an Event" : "Create an Event"}</span>
        <span className="icon-form"><Icon color="#868297" icon="event" /></span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="formElements">
          <FormElement
            placeholder="Title"
            name="title"
            type="text"
            maxLength="30"
            required={true}
            handleError={false}
            currentError={false}
            onChange={e => updateFormData({ name: "title", value: e.target.value })}
            disabled={disabled}
            value={event.title} />
          <FormElement
            label="Color"
            type="radio"
            required={true}
            handleError={false}
            currentError={false}
            onChange={e => updateFormData({ name: "color", value: e })}
            items={colors}
            value={event.color}
            disabled={disabled}
            name="color" />

          <FormElement
            label="Date"
            type="date"
            name="date"
            required={true}
            handleError={false}
            currentError={false}
            onChange={e => updateFormData({ name: "date", value: e.target.value })}
            value={event.date}
            disabled={disabled} />

          <FormElement
            label="Time"
            type="time"
            name="time"
            required={true}
            handleError={false}
            currentError={false}
            onChange={e => updateFormData({ name: "time", value: e.target.value })}
            disabled={disabled}
            value={event.time} />

          <FormElement
            label="City"
            type="text"
            name="city"
            required={true}
            handleError={false}
            currentError={false}
            onChange={e => updateFormData({ name: "city", value: e.target.value })}
            disabled={disabled}
            value={event.city} />

          {formData.title && disabled && <div className={`position-weather ${weatherReady && 'is-ready'}`}><Weather city={formData.city} isReady={setWeatherReady} /></div>}
        </div>
        <div className="action flex ">
          {formData.title && disabled &&
            <>
              <button className="shadow-sm" onClick={handleClose}>Close</button>
              <button className="shadow-sm delete" onClick={openDialog}>Delete</button>
              <button onClick={() => setDisabled(false)} className="shadow-sm active">Modify</button>
            </>
          }
          {formData.title && !disabled &&
            <>
              <button onClick={handleClose}>Cancel</button>
              <button type="submit" className="shadow-sm active">Modify</button>
            </>
          }
          {!formData.title && !disabled &&
            <>
              <button className="shadow-sm" onClick={handleClose}>Cancel</button>
              <button type="submit" className="shadow-sm active">Create</button>
            </>
          }
        </div>

        <Modal visible={isDeletedAlert} handleVisible={setDeletedAlert}>
          <div className="header flex justify-between flex-row items-center">
            <span className="text-lg font-bold text-black">Are you sure you want to delete this event?</span>
          </div>
          <div className="action flex mt-5">
            <button className="shadow-sm" onClick={() => setDeletedAlert(false)}>Cancel</button>
            <button type="submit" className="shadow-sm active"  onClick={onDelete}>Yes, delete it!</button>
          </div>
        </Modal>
      </form>
    </>
  )
}

export default FormEvent;