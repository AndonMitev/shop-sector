import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import Table from './components/table/Table';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="container-fluid">
      <div className="row container-wrapper">
        <div className="side-columns right-half" />
        <div className="col-md-8 ml-5">
          <Header />
          <Table />
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="side-columns left-half" />
      </div>
    </div>
  );
}

export default App;
