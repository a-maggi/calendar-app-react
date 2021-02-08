import { render, fireEvent, leftClick } from '@testing-library/react';
import App from './App';
import { Provider } from "./context";

describe('This will test Event form', () => {
  test('render card event after create', () => {
    const { container, getByText, getNodeText, querySelectorAll, getByLabelText, getByPlaceholderText } = render(<Provider><App /></Provider>);

    const openDialogButton = getByText('Add Event')
    fireEvent.click(openDialogButton, leftClick)

    const titleInput = getByPlaceholderText('Title')
    const colorInput = getByLabelText('#f6beb7')
    const dateInput = getByLabelText('Date')
    const timeInput = getByLabelText('Time')
    const cityInput = getByLabelText('City')


    const submitButton = getByText('Create')

    fireEvent.click(colorInput, leftClick);

    fireEvent.change(titleInput, { target: { value: "This is a test" } });
    fireEvent.change(dateInput, { target: { value: "2021-02-11" } });
    fireEvent.change(timeInput, { target: { value: "11:00" } });
    fireEvent.change(cityInput, { target: { value: "Quito" } });

    fireEvent.click(submitButton, leftClick)
    const text = container.querySelector('.event-card')

    expect(text).toHaveTextContent("This is a test");
  });

  test('not render card event with incomplete form', () => {
    const { container, getByText, getNodeText, querySelectorAll, getByLabelText, getByPlaceholderText } = render(<Provider><App /></Provider>);

    const openDialogButton = getByText('Add Event')
    fireEvent.click(openDialogButton, leftClick)

    const titleInput = getByPlaceholderText('Title')
    const colorInput = getByLabelText('#f6beb7')
    const dateInput = getByLabelText('Date')
    const timeInput = getByLabelText('Time')
    const cityInput = getByLabelText('City')


    const submitButton = getByText('Create')

    fireEvent.click(colorInput, leftClick);

    fireEvent.change(titleInput, { target: { value: "This is a test" } });
    fireEvent.change(timeInput, { target: { value: "11:00" } });
    fireEvent.change(cityInput, { target: { value: "Quito" } });

    fireEvent.click(submitButton, leftClick)
    const text = container.querySelectorAll('.event-card')
    expect(text.length).toEqual(0);
  });
})