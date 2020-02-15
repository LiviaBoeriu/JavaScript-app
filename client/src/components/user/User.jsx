import React from 'react';
import './User.css';

function User(props) {
    return (
        <li className='user'>
            <img className='user-avatar' src={require("../../images/" + props.avatar)} alt='Avatar'/>
            <div className='user-info'>
                <p className='user-name'>{props.firstName + ' ' + props.lastName}</p>
                <p className='user-role'>{props.role}</p>
            </div>
      </li> 
    )
}

export default User;