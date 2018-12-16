import React, { Component } from 'react';
import './App.css';
import CsvParser from './components/CsvParser'
import CsvDos from './components/CsvDos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CsvParser />
        <CsvDos />
      </div>
    );
  }
}

export default App;
