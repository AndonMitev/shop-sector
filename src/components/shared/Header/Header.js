import React, { useState } from 'react';
import './Header.css';
import CustomerName from './CustomerName/CustomerName';
import SearchInput from '../SearchInput/SearchInput';

function Header() {

  const [name, setName] = useState('');

  function parentHandler(inputValue) {
    if (inputValue) {
      setName(inputValue);
    }
  }


  return (
    <div className="row full-width mb-5">
      <div className="col-md-12">
        <div className="row mt-4">
          <CustomerName name={name} />
          <SearchInput parentHandler={parentHandler} />
        </div>
      </div>
    </div>
  );
}

export default Header;