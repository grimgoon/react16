import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputValue : '',
    showTextLengthRequirement : false,
  }

  
  outputTextLengthHandler = (e) => {
    
    let inputValue = e.target.value;
    this.setState({inputValue : inputValue});

    if(this.state.inputValue.length >= 5)
    {
      this.setState({showTextLengthRequirement : true});
    }
    else
    {
      this.setState({showTextLengthRequirement : false});
    }
  }

  charDeleteHandler = (index) => {
    console.log(index);

    let arrayValues = this.state.inputValue.split('');
    arrayValues.splice(index,1);
    let inputValue = arrayValues.join('');

    this.setState({inputValue : inputValue});
  }

  render() {

    let textLength = null;

    if(this.state.showTextLengthRequirement)
    {
      textLength = (
        <ValidationComponent textLength={this.state.inputValue.length} />
        );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.outputTextLengthHandler} value={this.state.inputValue} />
        <p>The text length is: {this.state.inputValue.length}</p>
        {textLength}
        {this.state.inputValue.split('').map((letter, index) => {
          return <CharComponent click={() => this.charDeleteHandler(index)} text={letter} />
        })}
        
      </div>
    );
  }
}

const ValidationComponent = (prop) => {

  if(prop.textLength > 5) {
    return <p>Text is too long</p>
  }
  else
  {
    return null;
  }
}

const CharComponent = (props) => {
  return <div onClick={props.click} className="Char">{props.text}</div>
}

export default App;
