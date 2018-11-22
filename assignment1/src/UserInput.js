import React from 'react';
import './UserInput.css';

const UserInput = (props) =>
{
    return (
        <input className='userInput--value' value={props.name} onChange={props.nameHandler} />
    );
}

export default UserInput;