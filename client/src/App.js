import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.post('http://localhost:5000/api/users', {
      firstName: 'Fred',
      lastName: 'Flintstone',
      role: 'editor',
      gender: 'M',
      dateOfBirth: "1995-03-25",
      nationality: 'DK',
      memebership: "2019-07-12"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
      </div>
    );
  }
}

export default App;
