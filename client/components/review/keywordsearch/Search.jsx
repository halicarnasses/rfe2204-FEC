import React, { useState } from 'react';

function Search({ handleSearch }) {
  function handlerChange(e) {
    const searchInput = e.target.value;
    handleSearch(searchInput);
  }
  return (
    <div>
      <form>
        <input onChange={handlerChange} type="text" id="searchinput" placeholder="Search" />
      </form>
    </div>
  )
}
export default Search;