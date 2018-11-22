import React from 'react';

const UserOutput = (props) => {

    const buttonStyle = {
        border: '1px solid blue',
        width : '100px',
      };

    return (
        <div>
            <p style={buttonStyle}>My name is {props.username}</p>
            <p style={buttonStyle}>My name is also {props.username}</p>
        </div>

    );
}

export default UserOutput;