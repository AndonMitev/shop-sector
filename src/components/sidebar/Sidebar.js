import React from 'react';
import './Sidebar.css';
import mockData from '../mock/data.json';

function Sidebar() {
  const { items } = mockData;

  return (
    <div className="mt-4 ml-5 details-wrapper">
      <div className="details-scroll">
        <div>
          {items.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Unit: {item.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;