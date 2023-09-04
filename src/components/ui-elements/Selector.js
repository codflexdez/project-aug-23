
import React from 'react';

const Selector = ({ options, selOption, toChangeOpt }) => {
  
  
  const handleChange = (e) => {
    toChangeOpt(e.target.value);
  };

  return (
    <div className="select maxWidth22">
    <select id="standard-select" value={selOption} onChange={handleChange} >
      {options.map((option) => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
    <span className="fa fa-angle-down" title="dropdown"></span>
</div>
  );
};

export default Selector;
