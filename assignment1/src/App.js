import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';
class App extends Component {

 state = {
   username : 'Alexander',
 }
  
 usernameHandler = (e) => {
    this.setState({
      username : e.target.value,
    });
 }

  render() {
    return (
      <div className="App">
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>
          <UserOutput username={this.state.username}/>

          <UserInput name={this.state.username} nameHandler={this.usernameHandler}/>
      </div>
    );
  }
}

export default App;
