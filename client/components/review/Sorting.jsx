import React from 'react';

function Sorting({ currentOption, handleSortChange }) {
  function handleChange(e) {
    e.preventDefault();
    handleSortChange(e.target.value);
  }
  return (
    <div id="sorting">
      <label>Sort by &emsp;</label>
      <select onChange={handleChange} name="sortingOps" id="sortvalues">
        <option value="relevant">revlevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
      </div>
  )
}
export default Sorting;