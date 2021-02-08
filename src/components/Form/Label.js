import PropTypes from 'prop-types';

const Label = ({ name, children }) => (
  <>
    <label htmlFor={`${name}-input`} aria-labelledby={`${name}-input`} className="text-sm font-medium">
      { children }
    </label>
  </>
);

Label.propTypes = {
  children: PropTypes.node.isRequired
};

Label.defaultProps = {
  children: false,
};

export default Label;