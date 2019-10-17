import React, { useState } from 'react';

function SearchInput({ parentHandler }) {
  const [inputValue, setInputValue] = useState('');

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleOnBlur(event) {
    parentHandler(event.target.value);
    setInputValue('');
  }

  return (
    <div className="col-md-4 d-flex justify-content-end">
      <input
        type="text"
        placeholder="search..."
        className="form-control"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        value={inputValue}
      />
    </div>
  )
}

export default SearchInput;