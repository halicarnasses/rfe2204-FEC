import React from 'react';

function SortOptions({ handleSort }) {
  function handleSortingSelection(e) {
    const option = e.target.value;
    // call api to change the alter
    handleSort(option);
  }
  return (
    <>
      <label htmlFor="sorting">Sort on</label>
      <select onChange={handleSortingSelection} name="sort-options" id="sorting">
        <option value="relevant">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </>
  );
}
export default SortOptions;
