import React from 'react';
import './NewUser.scss';
import Button from '../Button/Button';

class NewUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      this.handleInputChange = this.handleInputChange.bind(this);   
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    postNewUser = () => {
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role,
            gender: this.state.gender,
            dateOfBirth: new Date(this.state.date),
            membership: new Date(""),
            avatar: 'pirate.png'
        };
        // complete user obj
        this.props.postNewUser(user)
    }

    render() {
        return (
            <form className="form-style" onSubmit={(e) => e.preventDefault()}>
                <input type="text" id="fname" name="firstName" placeholder="First Name" onChange={this.handleInputChange}/>

                <input type="text" id="lname" name="lastName" placeholder="Last Name" onChange={this.handleInputChange}/>

                <select id="role" name="role" onChange={this.handleInputChange}>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="moderator">Moderator</option>
                </select>

                <label htmlFor="gender">Gender</label>
                <input className="radio" type="radio" id="male" name="gender" value="male" onChange={this.handleInputChange}/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" onChange={this.handleInputChange}/>
                <label htmlFor="female" className="radio" >Female</label>

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" id="start" name="date"
                    min="1950-01-01" max="2020-12-31" onChange={this.handleInputChange}/>

                <div className="form-buttons">
                <Button name="Back" align="left" handleClick={this.props.renderUserList}/>
                
                <Button name="Submit" align="right" handleClick={this.postNewUser}/> 
                </div>
            </form>
        );
    }
}

export default NewUser;