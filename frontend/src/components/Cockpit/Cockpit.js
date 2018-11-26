import React from 'react';
import style from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = style.Red;
    }

    if (props.persons.length <= 2 ) {
      assignedClasses.push( style.red ); // classes = ['red']
    }
    if (props.persons.length <= 1 ) {
      assignedClasses.push( style.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={style.Cockpit}>
        <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;