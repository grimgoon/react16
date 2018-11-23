import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  
  state = {
    persons : [
      {name : 'Max', age: '28'},
      {name : 'Alexander', age: '24'},
      {name : 'Stephanie', age: '25'},
    ],
    testState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons : [
        {name : newName, age: '28'},
        {name : 'Alexander', age: '11'},
        {name : 'Stephanie', age: '26'}
      ]
      } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name : 'Max', age: 28},
        {name : event.target.value, age: 11},
        {name : 'Stephanie', age: 26}
      ]
      } )
  }

  toggglePersonsHandler = () => {
    
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {

    const buttonStyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {

      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person 
            name={person.name} 
            age={person.age} />
        })}
      </div>
      );
    }

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle} onClick={this.toggglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "Hi Hi!"));
  }
}

export default App;