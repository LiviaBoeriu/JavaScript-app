import React from 'react';
import './User.css';
import Button from '../Button/Button';

function User(props) {
    return (
        <li className='user'>
            <img className='user-avatar' src={require("../../images/" + props.avatar)} alt='Avatar'/>
            <div className='user-info'>
                <p className='user-name'>{props.firstName + ' ' + props.lastName}</p>
                <p className='user-role'>{props.role}</p>
            </div>
            <Button name="Delete" align="right" handleClick={() => props.deleteUser(props.id)}/>
      </li> 
    )
}

export default User;