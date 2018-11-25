import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  
  state = {
    persons : [
      {id : '1', name : 'Max', age: 28},
      {id : '2', name : 'Alexander', age: 11},
      {id : '3', name : 'Stephanie', age: 26}
    ],
    testState: 'Some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex);
     
    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  toggglePersonsHandler = () => {
    
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {

    const buttonStyle = {
      backgroundColor : 'green',
      color: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer',
    };

    let persons = null;



    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonsHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
      </div>
      );

      buttonStyle.backgroundColor = 'red';

    }

    let pClasses = [];

    if(this.state.persons.length <= 2) {
      pClasses.push('red')
    }

    if(this.state.persons.length <= 1) {
      pClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={pClasses.join(' ')}>This is really working!</p>
        <button style={buttonStyle} onClick={this.toggglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "Hi Hi!"));
  }
}

export default App;