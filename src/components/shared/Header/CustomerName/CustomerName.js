import React from 'react';
import './CustomerName.css';

function CustomerName({ name }) {
  return (
    <div className="col-md-8">
      <h4 className="ml-5 customer-header">Customer Name: {name}</h4>
    </div>
  )
}


export default CustomerName;
