import React from 'react';
import style from './Cockpit.css';
//import Aux from '../../hoc/Aux.js';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = style.Button;

    if(props.showPersons){
        btnClass = [style.Button, style.Red].join(' ');
    }

    if (props.persons.length <= 2 ) {
      assignedClasses.push( style.red ); // classes = ['red']
    }
    if (props.persons.length <= 1 ) {
      assignedClasses.push( style.bold ); // classes = ['red', 'bold']
    }

    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </>
    );
};

export default React.memo(cockpit);