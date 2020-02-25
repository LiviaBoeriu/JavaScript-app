import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './components/user/User';
import Button from './components/Button/Button';
import NewUser from './components/NewUser/NewUser';

const root = 'http://localhost:5000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isNewUser: false
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

  renderUserForm = () => {
    this.setState({isNewUser: true})
  }

  renderUserList = () => {
    this.setState({isNewUser: false})
  }

  postNewUser(user) {
    //make call
    // if success set new list
    // if error show error
    axios.post(`/api/users`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>

        {
          !this.state.isNewUser ?        
          <section className="user-section">
            <ul className='user-list'>
              {
                this.state.users.map(user => <User key={user.id} firstName={user.firstName} lastName={user.lastName} role={user.role} avatar={user.avatar}/>)
              }
            </ul>
            <Button name="Add User" align="right" handleClick={this.renderUserForm} />
          </section> :
          <div className="new-user-form">
              <NewUser renderUserList={this.renderUserList} postNewUser={this.postNewUser}/> 
          </div>
        }    

      </div>
    );
  }
}

export default App;
