import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterInput }) => {
  const [filter, setFilter] = useState('');
  useEffect(() => {
   onFilterInput(filter);
  }, [filter, onFilterInput]);

  return (
    
    <div >
     
      <input name="filter" placeholder="Find contacts by name" onChange={e => setFilter(e.target.value)} />
  
      </div>
      
  );
};

Filter.propTypes = {
 onFilterInput: PropTypes.func.isRequired,
};


export default Filter;