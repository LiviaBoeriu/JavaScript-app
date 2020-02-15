import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './components/user/User';

const root = 'http://localhost:5000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    let self = this;
    axios.get(root + '/api/users')
    .then(function (res) {
      // handle success
      self.setState({
        users: res.data
      })
    })
    .catch(function (err) {
      // handle error
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <ul className='user-list'>
          {
            this.state.users.map(user => <User key={user.id} firstName={user.firstName} lastName={user.lastName} role={user.role} avatar={user.avatar}/>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
