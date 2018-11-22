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
    testState: 'Some other value'
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

  render() {

    const buttonStyle = {
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor : 'pointer',
    };

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={buttonStyle} onClick={() => this.switchNameHandler('TestName!')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>

      </div>
    );

    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "Hi Hi!"));
  }
}

export default App;