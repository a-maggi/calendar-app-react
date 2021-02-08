import PropTypes from "prop-types";
import Label from './Label';

const Radio = ({ value, name, label, required, disabled, items, onChange }) => (
  <>
    <div className="radioComponent flex items-center">
      <Label name={name}>{label}</Label>
      <div className={`radioInput ${disabled && 'disabled'}`}>
        {items?.map(item => [
          <input
            key={`${item.trim()}-input`}
            type="radio"
            disabled={disabled}
            name={label.trim()}
            value={item.trim()}
            checked={item === value}
            id={`${label.trim()}-${item.trim()}`}
            required={required}
            onChange={() => onChange(item)}
          />,
          <label key={`${item.trim()}-label`} htmlFor={`${label.trim()}-${item.trim()}`} style={{ color: item, background: item }}>{item}</label>
        ])}
      </div>
    </div>
  </>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
