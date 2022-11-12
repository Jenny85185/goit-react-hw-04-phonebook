import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

 const Filter = ({ value, onChange }) => (
  <label>
    <Input
      type="text"
      name={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter; 
