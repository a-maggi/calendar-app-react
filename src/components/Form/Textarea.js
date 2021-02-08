import PropTypes from 'prop-types';

const Textarea = ({ name, onChange }) => (
  <>
    <textarea onChange={(e) => onChange(e)} className="inputField" name={name} />
    <style jsx>{`
      .inputField {
        height: 160px;
      }
    `}</style>
  </>
);

Textarea.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Textarea;