import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/AuxHOC';
import {AuthContext} from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
      }
    
      componentWillMount(){
        console.log('[Person.js] Will Mount');
      }
      
      componentDidMount() {
        console.log('[Person.js] Did Mount');
        //this.focusInput();
      }

      componentWillUnmount()
      {
          console.log('A person got killed');
          
      }

      focus(){
        this.inputElement.current.focus();
      }

    render() {

        console.log('[Person.js] Render');

        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm Authenticated</p> : null}
                </AuthContext.Consumer>
               
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>this.{this.props.children}</p>
                <input
                    ref={this.inputElement} 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux> 
        )

        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2">this.{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />,
        // ]
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClass(Person, classes.Person);