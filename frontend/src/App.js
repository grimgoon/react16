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

  switchNameHandler = () => {
    // console.log('Was clicked!');
    this.setState({
      persons : [
        {name : 'Maxuuu', age: '28'},
        {name : 'Stephanie', age: '26'}
      ]
      } )
  }

  render() {
    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );

    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "Hi Hi!"));
  }
}

export default App;