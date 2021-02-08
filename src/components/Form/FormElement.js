import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';
import Radio from './Radio';
import SearchLocation from './SearchLocation';
import './form.css';

const renderInput = (props) => {
  if (props.type === 'radio') return <Radio { ...props} />;
  if (props.type === 'searchlocation') return <SearchLocation {...props} />
  return <Input { ...props} />;
};

const FormElement = (props) => {
  return (
    <div className="Input">
      {props.type !== 'radio' && <Label name={props.name}>{props.label}</Label>}
      { renderInput(props) }
      <span className="error">{props.error}</span>
    </div>
  );
}

FormElement.propTypes = {
  label: PropTypes.string,
  element: PropTypes.node,
};

export default FormElement;