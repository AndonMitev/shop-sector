import React from 'react';
import mockData from '../mock/data.json';
import './Table.css';

function Table() {
  const { items } = mockData;

  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table className="w-100 mt-5 orders-table" id="test">
          <tbody>
            <tr className="row">
              <th className="col-md-3 text-center">
                Name
              </th>
              <th className="col-md-3 text-center">
                Price
              </th>
              <th className="col-md-3 text-center">
                Quantity
              </th>
              <th className="col-md-3 text-center">
                Unit
              </th>
            </tr>
            {items.map(item => (
              <tr className="row mt-3" key={item.id}>
                <td className="col-md-3 text-center py-3">{item.name}</td>
                <td className="col-md-3 text-center py-3">{item.price}</td>
                <td className="col-md-3 text-center py-3">{item.quantity}</td>
                <td className="col-md-3 text-center py-3">{item.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
