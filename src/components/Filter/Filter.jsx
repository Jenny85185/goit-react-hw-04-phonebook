import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
 

const Filter = ({ onFilterInput }) => {
  const [filter, setFilter] = useState('');
  useEffect(() => {
   onFilterInput(filter);
  }, [filter, onFilterInput]);

  return (
    <div >
      <p >Find contacts by name</p>
      <input name="filter" onChange={e => setFilter(e.target.value)} />
    </div>
  );
};

Filter.propTypes = {
 onFilterInput: PropTypes.func.isRequired,
};


export default Filter;