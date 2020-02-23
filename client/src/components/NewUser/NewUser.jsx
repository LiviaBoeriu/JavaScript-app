import React from 'react';
import './NewUser.css';
import Button from '../Button/Button';

class NewUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
        return (
            <form className="new-user-form">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="fname" name="firstName" />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lname" name="lastName" />

                <label htmlFor="role">Role</label>
                <select id="role" name="Role">
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="moderator">Moderator</option>
                </select>

                <label htmlFor="gender">Gender</label>
                <input type="radio" id="male" name="gender" value="male" />
                <input type="radio" id="female" name="gender" value="female" />

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" id="start" name="start-date"
                    min="1950-01-01" max="2020-12-31" />

                <label htmlFor="nationality">Nationality</label>
                <input type="text" id="nationality" name="nationality" />

                <Button name="Back" handleClick={this.props.renderUserList}/>
            </form>
        );
    }
}

export default NewUser;