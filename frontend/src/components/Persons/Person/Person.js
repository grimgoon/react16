import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/AuxHOC';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
      }
    
      componentWillMount(){
        console.log('[Person.js] Will Mount');
      }
      
      componentDidMount() {
        console.log('[Person.js] Did Mount');
      }

      componentWillUnmount()
      {
          console.log('A person got killed');
      }

    render() {

        console.log('[Person.js] Render');

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>this.{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux> 
        )

        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2">this.{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />,
        // ]
    }
}

export default withClass(Person, classes.Person);