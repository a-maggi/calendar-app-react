import PropTypes from "prop-types";

const Input = ({ name, placeholder, error, maxLength, required, disabled, type, pattern, value, onChange = ()=>{}, onBlur = ()=>{} }) => (
  <input
    onChange={e => onChange(e)}
    onBlur={() => onBlur(name)}
    id={`${name}-input`}
    className={`inputField ${error ? "inputField-error" : ""}`}
    pattern={pattern && pattern}
    disabled={disabled}
    name={name}
    type={type}
    maxLength={maxLength && maxLength}
    required={required}
    placeholder={placeholder}
    value={value}
  />
);

Input.propTypes = {
  name: PropTypes.string,
  error: PropTypes.any,
  required: PropTypes.any,
  onChange: PropTypes.func
};

export default Input;